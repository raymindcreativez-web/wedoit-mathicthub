import { useState } from 'react';

export default function MathScoreForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    studentId: '',
    topic: '',
    score: '',
    maxScore: '100',
    date: new Date().toISOString().split('T')[0]
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Validate score is a number and not greater than maxScore
    const scoreNum = parseFloat(formData.score);
    const maxScoreNum = parseFloat(formData.maxScore);
    if (isNaN(scoreNum) || scoreNum < 0 || isNaN(maxScoreNum) || maxScoreNum <= 0 || scoreNum > maxScoreNum) {
      setError('Please enter a valid score between 0 and the maximum score');
      setLoading(false);
      return;
    }

    try {
      // In a real app, this would send data to an API endpoint
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSuccess(true);
      // Reset form after successful submission
      setFormData({
        studentName: '',
        studentId: '',
        topic: '',
        score: '',
        maxScore: '100',
        date: new Date().toISOString().split('T')[0]
      });
    } catch (err) {
      setError('Failed to save score. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Record Math Score</h2>

      {success && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
          Score recorded successfully!
        </div>
      )}

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-1">
            Student Name
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter student's full name"
          />
        </div>

        <div>
          <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-1">
            Student ID
          </label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter student ID"
          />
        </div>

        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
            Topic / Skill
          </label>
          <input
            type="text"
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Fractions, Algebraic Expressions"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="score" className="block text-sm font-medium text-gray-700 mb-1">
              Score Obtained
            </label>
            <input
              type="number"
              id="score"
              name="score"
              value={formData.score}
              onChange={handleChange}
              required
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Points earned"
            />
          </div>

          <div>
            <label htmlFor="maxScore" className="block text-sm font-medium text-gray-700 mb-1">
              Maximum Score
            </label>
            <input
              type="number"
              id="maxScore"
              name="maxScore"
              value={formData.maxScore}
              onChange={handleChange}
              required
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Total points possible"
            />
          </div>
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            Date of Assessment
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Saving Score...' : 'Record Score'}
        </button>
      </form>

      {/* Optional: Show entered score percentage */}
      {!loading && formData.score && formData.maxScore && !error && !success && (
        <div className="mt-4 p-3 bg-blue-50 rounded-md text-center">
          <p className="text-sm font-medium text-gray-900 mb-1">
            Percentage Score:
          </p>
          <p className="text-2xl font-bold text-blue-600">
            {((parseFloat(formData.score) / parseFloat(formData.maxScore)) * 100).toFixed(1)}%
          </p>
        </div>
      )}
    </div>
  );
}