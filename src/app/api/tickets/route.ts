import { NextResponse } from 'next/server';

// In a real app, this would connect to a database like Firestore
let tickets = [
  {
    id: 'TK-001',
    subject: 'Projector not displaying in Room 205',
    description: 'The projector in Room 205 is not displaying any image when connected to the teacher\'s laptop.',
    status: 'Open',
    priority: 'Medium',
    createdAt: '2026-06-01',
    assignedTo: 'IT Support Team',
    createdBy: 'Ms. Johnson (Math Teacher)'
  },
  {
    id: 'TK-002',
    subject: 'Unable to access online quiz platform',
    description: 'Students in Period 3 Algebra class cannot access the quiz platform due to authentication errors.',
    status: 'In Progress',
    priority: 'High',
    createdAt: '2026-06-02',
    assignedTo: 'Tech Coordinator',
    createdBy: 'Mr. Davis (Math Teacher)'
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');
  const priority = searchParams.get('priority');

  let filteredTickets = [...tickets];

  if (status) {
    filteredTickets = filteredTickets.filter(ticket => ticket.status.toLowerCase() === status.toLowerCase());
  }

  if (priority) {
    filteredTickets = filteredTickets.filter(ticket => ticket.priority.toLowerCase() === priority.toLowerCase());
  }

  return NextResponse.json(filteredTickets);
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

    // Create new ticket
    const newTicket = {
      id: `TK-${String(tickets.length + 1).padStart(3, '0')}`,
      subject: ticketData.subject,
      description: ticketData.description,
      status: 'Open', // Default status
      priority: ticketData.priority,
      createdAt: new Date().toISOString().split('T')[0],
      assignedTo: ticketData.assignedTo || 'Unassigned',
      createdBy: ticketData.createdBy
    };

    tickets.push(newTicket);

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

    const ticketIndex = tickets.findIndex(ticket => ticket.id === id);

    if (ticketIndex === -1) {
      return NextResponse.json(
        { error: 'Ticket not found' },
        { status: 404 }
      );
    }

    // Update ticket
    tickets[ticketIndex] = { ...tickets[ticketIndex], ...updates };

    return NextResponse.json(tickets[ticketIndex]);
  } catch (error) {
    console.error('Error updating ticket:', error);
    return NextResponse.json(
      { error: 'Failed to update ticket' },
      { status: 500 }
    );
  }
}