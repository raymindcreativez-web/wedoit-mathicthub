'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NewTicketPage() {
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
    priority: 'Medium',
    category: 'Hardware',
    impact: 'Medium',
    urgency: 'Medium',
    assignedTo: '',
    deviceDetails: {
      type: '',
      brand: '',
      model: '',
      serialNumber: '',
      assetTag: ''
    },
    location: {
      room: '',
      building: '',
      floor: ''
    },
    // Fields for ICT help desk flow (initially empty)
    actionTaken: '',
    resolutionDate: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNestedChange = (parent: string, child: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [child]: value
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      // In a real app, we would get the user ID from auth
      const userId = 'current-user-id'; // Placeholder
      const userName = 'Current User'; // Placeholder

      const ticketData = {
        subject: formData.subject,
        description: formData.description,
        priority: formData.priority,
        category: formData.category,
        impact: formData.impact,
        urgency: formData.urgency,
        assignedTo: formData.assignedTo || 'Unassigned',
        createdBy: `${userName} (${userId})`,
        deviceDetails: formData.deviceDetails,
        location: formData.location
      };

      const response = await fetch('/api/ict-tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ticketData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create ticket');
      }

      const data = await response.json();
      setSuccess('Ticket created successfully!');
      setTimeout(() => {
        // Redirect to ticket list after success
        window.location.href = '/ict-helpdesk';
      }, 1500);
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred');
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">New ICT Ticket</h1>
          <Link href="/ict-helpdesk" className="text-blue-600 hover:underline">
            ← Back to Tickets
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
                  Priority *
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Critical">Critical</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Hardware">Hardware</option>
                  <option value="Software">Software</option>
                  <option value="Network">Network</option>
                  <option value="Account">Account/Access</option>
                  <option value="Printer">Printer</option>
                  <option value="Projector">Projector</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Desktop">Desktop</option>
                  <option value="Tablet">Tablet</option>
                  <option value="Smartphone">Smartphone</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="assignedTo" className="block text-sm font-medium text-gray-700 mb-1">
                  Assigned To
                </label>
                <input
                  id="assignedTo"
                  name="assignedTo"
                  type="text"
                  value={formData.assignedTo}
                  onChange={handleChange}
                  placeholder="e.g., IT Support Team"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="impact" className="block text-sm font-medium text-gray-700 mb-1">
                  Impact
                </label>
                <select
                  id="impact"
                  name="impact"
                  value={formData.impact}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Critical">Critical</option>
                </select>
              </div>

              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
                  Urgency
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Critical">Critical</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-4">Resolution Details</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="actionTaken" className="block text-sm font-medium text-gray-700 mb-1">
                    Action Taken
                  </label>
                  <textarea
                    id="actionTaken"
                    name="actionTaken"
                    rows="3"
                    value={formData.actionTaken}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="resolutionDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Resolution Date
                  </label>
                  <input
                    id="resolutionDate"
                    name="resolutionDate"
                    type="date"
                    value={formData.resolutionDate || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-4">Device Details (Optional)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="deviceType" className="block text-sm font-medium text-gray-700 mb-1">
                    Device Type
                  </label>
                  <input
                    id="deviceType"
                    name="deviceType"
                    type="text"
                    value={formData.deviceDetails.type}
                    onChange={(e) => handleNestedChange('deviceDetails', 'type', e)}
                    placeholder="e.g., Projector, Laptop, Printer"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="deviceBrand" className="block text-sm font-medium text-gray-700 mb-1">
                    Brand
                  </label>
                  <input
                    id="deviceBrand"
                    name="deviceBrand"
                    type="text"
                    value={formData.deviceDetails.brand}
                    onChange={(e) => handleNestedChange('deviceDetails', 'brand', e)}
                    placeholder="e.g., Epson, Dell, HP"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="deviceModel" className="block text-sm font-medium text-gray-700 mb-1">
                    Model
                  </label>
                  <input
                    id="deviceModel"
                    name="deviceModel"
                    type="text"
                    value={formData.deviceDetails.model}
                    onChange={(e) => handleNestedChange('deviceDetails', 'model', e)}
                    placeholder="e.g., PowerLite 1781W, Inspiron 15"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="deviceSerial" className="block text-sm font-medium text-gray-700 mb-1">
                    Serial Number
                  </label>
                  <input
                    id="deviceSerial"
                    name="deviceSerial"
                    type="text"
                    value={formData.deviceDetails.serialNumber}
                    onChange={(e) => handleNestedChange('deviceDetails', 'serialNumber', e)}
                    placeholder="e.g., ABC123XYZ"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-4">Location (Optional)</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="locationRoom" className="block text-sm font-medium text-gray-700 mb-1">
                    Room
                  </label>
                  <input
                    id="locationRoom"
                    name="locationRoom"
                    type="text"
                    value={formData.location.room}
                    onChange={(e) => handleNestedChange('location', 'room', e)}
                    placeholder="e.g., 205"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="locationBuilding" className="block text-sm font-medium text-gray-700 mb-1">
                    Building
                  </label>
                  <input
                    id="locationBuilding"
                    name="locationBuilding"
                    type="text"
                    value={formData.location.building}
                    onChange={(e) => handleNestedChange('location', 'building', e)}
                    placeholder="e.g., Main Building"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="locationFloor" className="block text-sm font-medium text-gray-700 mb-1">
                    Floor
                  </label>
                  <input
                    id="locationFloor"
                    name="locationFloor"
                    type="text"
                    value={formData.location.floor}
                    onChange={(e) => handleNestedChange('location', 'floor', e)}
                    placeholder="e.g., 2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <button
                type="button"
                onClick={() => window.location.href = '/ict-helpdesk'}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus-ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Creating Ticket...' : 'Submit Ticket'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}