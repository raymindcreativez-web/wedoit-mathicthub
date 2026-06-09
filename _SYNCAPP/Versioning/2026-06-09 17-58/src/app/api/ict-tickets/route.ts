import { NextResponse } from 'next/server';
import { createIctTicket, getIctTickets } from '@/lib/firestore';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const priority = searchParams.get('priority');
    const category = searchParams.get('category');
    const assignedTo = searchParams.get('assignedTo');

    // Build filters object
    const filters: Partial<any> = {};
    if (status) filters.status = status;
    if (priority) filters.priority = priority;
    if (category) filters.category = category;
    if (assignedTo) filters.assignedTo = assignedTo;

    const tickets = await getIctTickets(filters);
    return NextResponse.json(tickets);
  } catch (error) {
    console.error('Error fetching ICT tickets:', error);
    return NextResponse.json(
      { error: 'Failed to fetch ICT tickets' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const ticketData = await request.json();

    // Validate required fields
    const requiredFields = ['subject', 'description', 'priority', 'category', 'createdBy'];
    for (const field of requiredFields) {
      if (!ticketData[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Create new ICT ticket using Firestore
    const newTicket = await createIctTicket({
      subject: ticketData.subject,
      description: ticketData.description,
      status: 'New', // Default status for new tickets
      priority: ticketData.priority,
      category: ticketData.category,
      createdAt: new Date().toISOString().split('T')[0],
      assignedTo: ticketData.assignedTo || 'Unassigned',
      createdBy: ticketData.createdBy,
      // Optional ICT-specific fields
      impact: ticketData.impact || 'Medium',
      urgency: ticketData.urgency || 'Medium',
      deviceDetails: ticketData.deviceDetails || undefined,
      location: ticketData.location || undefined,
      // New fields for ICT help desk flow
      actionTaken: ticketData.actionTaken || '',
      resolutionDate: ticketData.resolutionDate || undefined,
    });

    return NextResponse.json(newTicket, { status: 201 });
  } catch (error) {
    console.error('Error creating ICT ticket:', error);
    return NextResponse.json(
      { error: 'Failed to create ICT ticket' },
      { status: 500 }
    );
  }
}