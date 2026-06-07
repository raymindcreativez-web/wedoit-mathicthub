import { NextResponse } from 'next/server';
import { createTicket, getTickets, updateTicket } from '@/lib/firestore';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const priority = searchParams.get('priority');

    // Build filters object
    const filters: Partial<any> = {};
    if (status) filters.status = status;
    if (priority) filters.priority = priority;

    const tickets = await getTickets(filters);
    return NextResponse.json(tickets);
  } catch (error) {
    console.error('Error fetching tickets:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tickets' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const ticketData = await request.json();

    // Validate required fields
    const requiredFields = ['subject', 'description', 'priority', 'createdBy'];
    for (const field of requiredFields) {
      if (!ticketData[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Create new ticket using Firestore
    const newTicket = await createTicket({
      subject: ticketData.subject,
      description: ticketData.description,
      status: 'Open', // Default status
      priority: ticketData.priority,
      createdAt: new Date().toISOString().split('T')[0],
      assignedTo: ticketData.assignedTo || 'Unassigned',
      createdBy: ticketData.createdBy
    });

    return NextResponse.json(newTicket, { status: 201 });
  } catch (error) {
    console.error('Error creating ticket:', error);
    return NextResponse.json(
      { error: 'Failed to create ticket' },
      { status: 500 }
    );
  }
}

// For updating a specific ticket (would normally use dynamic route like [id]/route.ts)
export async function PUT(request: Request) {
  try {
    const { id, ...updates } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Ticket ID is required' },
        { status: 400 }
      );
    }

    // Add updatedAt timestamp
    const updatesWithTimestamp = {
      ...updates,
      updatedAt: new Date().toISOString()
    };

    // Update ticket using Firestore
    const updatedTicket = await updateTicket(id, updatesWithTimestamp);

    if (!updatedTicket) {
      return NextResponse.json(
        { error: 'Ticket not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedTicket);
  } catch (error) {
    console.error('Error updating ticket:', error);
    return NextResponse.json(
      { error: 'Failed to update ticket' },
      { status: 500 }
    );
  }
}