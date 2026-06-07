'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ICTTicket } from '@/types/ictTicket';
import { getIctTickets } from '@/lib/firestore';

export default function TicketViewPage({ params }: { params: { id: string } }) {
  const [ticket, setTicket] = useState<ICTTicket | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        setLoading(true);
        // In a real app, we would fetch by ID directly.
        // Since our getIctTickets function doesn't support fetching by ID, we'll fetch all and filter.
        // For better performance, we should update the firestore function to support fetching by ID.
        const tickets = await getIctTickets();
        const foundTicket = tickets.find(t => t.id === params.id);
        if (foundTicket) {
          setTicket(foundTicket);
        } else {
          setError('Ticket not found');
        }
      } catch (err) {
        console.error('Error fetching ticket:', err);
        setError('Failed to fetch ticket');
      } finally {
        setLoading(false);
      }
    };

    fetchTicket();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Loading Ticket...</h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="h-4 w-4 border-t-2 border-b-2 border-blue-600 rounded"></div>
              <div className="h-4 w-4 border-t-2 border-b-2 border-blue-600 rounded"></div>
              <div className="h-4 w-4 border-t-2 border-b-2 border-blue-600 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-red-800 font-bold mb-2">Error</h3>
            <p className="text-red-700">{error}</p>
          </div>

          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Ticket Details</h1>
            <Link href="/ict-helpdesk" className="text-blue-600 hover:underline">
              ← Back to Tickets
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!ticket) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Ticket Not Found</h2>
            <Link href="/ict-helpdesk" className="text-blue-600 hover:underline">
              ← Back to Tickets
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Ticket Details</h1>
          <Link href="/ict-helpdesk" className="text-blue-600 hover:underline">
            ← Back to Tickets
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">{ticket.subject}</h2>
            <p className="text-gray-600">
              Ticket #{ticket.id.substring(0, 8)} • {ticket.status} • {ticket.priority} priority
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-700">{ticket.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Ticket Information</h3>
                <p className="text-gray-700">
                  <span className="font-medium">Created By:</span> {ticket.createdBy}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Created At:</span> {new Date(ticket.createdAt).toLocaleDateString()}
                </p>
                {ticket.updatedAt && (
                  <p className="text-gray-700">
                    <span className="font-medium">Updated At:</span> {new Date(ticket.updatedAt).toLocaleDateString()}
                  </p>
                )}
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Assignment</h3>
                <p className="text-gray-700">
                  <span className="font-medium">Assigned To:</span> {ticket.assignedTo}
                </p>
              </div>
            </div>

            {/* Resolution Details (if resolved) */}
            {ticket.status === 'Resolved' && (
              <div className="border-t pt-6">
                <h2 className="text-xl font-semibold mb-4">Resolution Details</h2>
                <div className="space-y-4">
                  {ticket.actionTaken && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Action Taken</h3>
                      <p className="text-gray-700">{ticket.actionTaken}</p>
                    </div>
                  )}
                  {ticket.resolutionDate && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Resolution Date</h3>
                      <p className="text-gray-700">{new Date(ticket.resolutionDate).toLocaleDateString()}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Status and Priority Badges */}
            <div className="flex flex-wrap gap-4">
              <span className={`px-3 py-1 text-xs font-semibold
                ${ticket.status === 'New' ? 'bg-green-100 text-green-800'
                  : ticket.status === 'In Progress' ? 'bg-blue-100 text-blue-800'
                  : ticket.status === 'Waiting' ? 'bg-yellow-100 text-yellow-800'
                  : ticket.status === 'Resolved' ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-800'}
              `}>
                {ticket.status}
              </span>
              <span className={`px-3 py-1 text-xs font-semibold
                ${ticket.priority === 'Low' ? 'bg-green-100 text-green-800'
                  : ticket.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800'
                  : ticket.priority === 'High' ? 'bg-red-100 text-red-800'
                  : 'bg-purple-100 text-purple-800'}
              `}>
                {ticket.priority}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex justify-end space-x-4">
              <Link
                href={`/ict-helpdesk/edit-ticket/${ticket.id}`}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus-ring-offset-2"
              >
                Edit Ticket
              </Link>
              <button
                onClick={() => {
                  if (window.confirm('Are you sure you want to delete this ticket?')) {
                    // In a real app, we would call deleteTicket function
                    alert('Ticket deletion would be implemented here.');
                  }
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus-ring-offset-2"
              >
                Delete Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}