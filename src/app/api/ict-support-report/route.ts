import { NextResponse } from 'next/server';
import { getIctTickets } from '@/lib/firestore';
import { createReport } from '@/lib/firestore';
import type { Report } from '@/types/index';

export async function POST(request: Request) {
  try {
    const { month, year, generatedBy } = await request.json();

    // Validate required fields
    if (!month || !year || !generatedBy) {
      return NextResponse.json(
        { error: 'Month, year, and generatedBy are required' },
        { status: 400 }
      );
    }

    // Calculate date range for the month
    const startDate = new Date(year, month - 1, 1); // Month is 0-indexed in JS
    const endDate = new Date(year, month, 0); // Last day of the month

    // Fetch ICT tickets for the specified month
    const tickets = await getIctTickets();

    // Filter tickets by date range
    const monthlyTickets = tickets.filter(ticket => {
      const ticketDate = new Date(ticket.createdAt);
      return ticketDate >= startDate && ticketDate <= endDate;
    });

    // Generate report statistics
    const statusCounts = {
      New: 0,
      'In Progress': 0,
      Waiting: 0,
      Resolved: 0
    };

    const priorityCounts = {
      Low: 0,
      Medium: 0,
      High: 0,
      Critical: 0
    };

    const categoryCounts: Record<string, number> = {};

    let resolvedCount = 0;
    let totalResolutionTime = 0;

    monthlyTickets.forEach(ticket => {
      // Count by status
      if (statusCounts[ticket.status as keyof typeof statusCounts] !== undefined) {
        statusCounts[ticket.status as keyof typeof statusCounts]++;
      }

      // Count by priority
      if (priorityCounts[ticket.priority as keyof typeof priorityCounts] !== undefined) {
        priorityCounts[ticket.priority as keyof typeof priorityCounts]++;
      }

      // Count by category
      if (ticket.category) {
        categoryCounts[ticket.category] = (categoryCounts[ticket.category] || 0) + 1;
      }

      // Calculate resolution metrics
      if (ticket.status === 'Resolved' && (ticket as any).resolutionDate) {
        resolvedCount++;
        const created = new Date(ticket.createdAt);
        const resolved = new Date((ticket as any).resolutionDate);
        const diffTime = Math.abs(resolved.getTime() - created.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        totalResolutionTime += diffDays;
      }
    });

    const avgResolutionTime = resolvedCount > 0 ? totalResolutionTime / resolvedCount : 0;

    // Prepare report data
    const reportData: Omit<Report, 'id'> = {
      title: `Monthly ICT Support Report - ${new Date(year, month - 1).toLocaleString('default', { month: 'long' })} ${year}`,
      description: `ICT support ticket analysis for ${new Date(year, month - 1).toLocaleString('default', { month: 'long' })} ${year}`,
      type: 'ictSupport',
      generatedFor: 'ict-department', // This could be made dynamic
      generatedBy,
      generatedAt: new Date().toISOString(),
      periodStart: startDate.toISOString(),
      periodEnd: endDate.toISOString(),
      format: 'json',
      parameters: { month, year },
      data: {
        summary: {
          totalTickets: monthlyTickets.length,
          resolvedTickets: resolvedCount,
          resolutionRate: monthlyTickets.length > 0 ? (resolvedCount / monthlyTickets.length) * 100 : 0,
          averageResolutionDays: parseFloat(avgResolutionTime.toFixed(1))
        },
        statusBreakdown: statusCounts,
        priorityBreakdown: priorityCounts,
        categoryBreakdown: categoryCounts,
        tickets: monthlyTickets.map(ticket => ({
          id: ticket.id,
          subject: ticket.subject,
          status: ticket.status,
          priority: ticket.priority,
          category: ticket.category,
          createdAt: ticket.createdAt,
          resolutionDate: (ticket as any).resolutionDate,
          actionTaken: (ticket as any).actionTaken
        }))
      },
      isScheduled: false,
      recipients: [],
      status: 'completed',
      createdAt: new Date().toISOString()
    };

    // Create the report in Firestore
    const report = await createReport(reportData);

    return NextResponse.json(report, { status: 201 });
  } catch (error) {
    console.error('Error generating ICT support report:', error);
    return NextResponse.json(
      { error: 'Failed to generate ICT support report' },
      { status: 500 }
    );
  }
}