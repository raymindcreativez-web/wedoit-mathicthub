"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getRuntimeConfigByKey, updateRuntimeConfig } from "@/lib/firestore";
import { useAuth } from "@/context/AuthContext";
import RoleGuard from "@/components/RoleGuard";

export default function AdminConfigPage() {
  const { firebaseUser, appUser, loading: authLoading } = useAuth();
  const router = useRouter();

  // Check if user is admin
  const isAdmin = appUser?.role === "admin";

  // Redirect if not authenticated or not admin
  if (authLoading || !firebaseUser) {
    // Show loading or redirect to login? We'll just return null for now.
    return null;
  }
  if (!isAdmin) {
    router.push("/");
    return null;
  }

  // Config keys we want to manage
  const configKeys = [
    "activeGeminiModel",
    "fallbackGeminiModel",
    "maxOutputTokens",
    "temperature",
    "enableMathTracker",
    "enableICTHelpDesk",
    "enableQuizGenerator",
    "enableLessonGenerator",
    "enableNotebookLinks",
    "dailyAiLimitTeacher",
    "dailyAiLimitAdmin",
    "maintenanceMode",
  ];

  const [config, setConfig] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Load config on mount
  useEffect(() => {
    const loadConfig = async () => {
      try {
        setLoading(true);
        const configPromises = configKeys.map((key) =>
          getRuntimeConfigByKey(key).then((doc) => ({
            key,
            value: doc ? doc.value : null,
          }))
        );
        const results = await Promise.all(configPromises);
        const configObj: Record<string, any> = {};
        results.forEach(({ key, value }) => {
          configObj[key] = value;
        });
        setConfig(configObj);
        setLoading(false);
      } catch (err: any) {
        console.error("Failed to load runtime config:", err);
        setError(err.message || "Failed to load configuration");
        setLoading(false);
      }
    };

    loadConfig();
  }, []);

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const updatePromises = Object.entries(config).map(
        async ([key, value]) => {
          // Ensure value is appropriate type (string, number, boolean)
          // For simplicity, we trust the form inputs.
          await updateRuntimeConfig(key, value);
        }
      );
      await Promise.all(updatePromises);
      setSuccess("Configuration updated successfully!");
      setLoading(false);
    } catch (err: any) {
      console.error("Failed to update runtime config:", err);
      setError(err.message || "Failed to update configuration");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-flex items-center justify-center bg-slate-50 p-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center rounded-md bg-indigo-50 text-indigo-600 w-12 h-12 mb-4">
            <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.001 8.001 0 01-15.356-2m0 0a5.002 5.002 0 107.566 5.06A5.002 5.002 0 0019.081 19Z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2">Loading Admin Configuration...</h2>
          <p className="text-sm text-gray-500">Please wait while we load your settings.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 p-4">
      <div className="max-w-4xl mx-auto">
        <RoleGuard allowedRoles={["admin"]}>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-indigo-50 px-6 py-4 border-b">
              <h1 className="text-2xl font-bold text-indigo-700 flex items-center gap-3">
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 100-2 1 1 0 000 2zm1-6a1 1 0 10-2 0V4a1 1 0 10-2 0v2a1 1 0 10-2 0h2v2a1 1 0 100 2h2V5a1 1 0 100-2zm6 11a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                Admin Settings
              </h1>
              <p className="mt-1 text-sm text-indigo-600">
                Configure global application settings for MathICT Hub
              </p>
            </div>

            <div className="p-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4" role="alert">
                  {error}
                </div>
              )}
              {success && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4" role="alert">
                  {success}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* AI Models Section */}
                <section>
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">AI Model Settings</h2>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Active Gemini Model
                      </label>
                      <input
                        type="text"
                        id="activeGeminiModel"
                        value={config.activeGeminiModel || ""}
                        onChange={(e) =>
                          setConfig((prev) => ({
                            ...prev,
                            activeGeminiModel: e.target.value,
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="gemini-1.5-flash"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Fallback Gemini Model
                      </label>
                      <input
                        type="text"
                        id="fallbackGeminiModel"
                        value={config.fallbackGeminiModel || ""}
                        onChange={(e) =>
                          setConfig((prev) => ({
                            ...prev,
                            fallbackGeminiModel: e.target.value,
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="gemini-1.5-flash"
                      />
                    </div>
                  </div>
                </section>

                {/* AI Parameters Section */}
                <section className="mt-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">AI Generation Parameters</h2>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Max Output Tokens
                      </label>
                      <input
                        type="number"
                        id="maxOutputTokens"
                        value={config.maxOutputTokens ?? ""}
                        onChange={(e) =>
                          setConfig((prev) => ({
                            ...prev,
                            maxOutputTokens: e.target.value ? parseInt(e.target.value, 10) : null,
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        min="1"
                        placeholder="1024"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Temperature
                      </label>
                      <input
                        type="number"
                        id="temperature"
                        step="0.1"
                        min="0"
                        max="2"
                        value={config.temperature ?? ""}
                        onChange={(e) =>
                          setConfig((prev) => ({
                            ...prev,
                            temperature: e.target.value ? parseFloat(e.target.value) : null,
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="0.4"
                      />
                    </div>
                  </div>
                </section>

                {/* Feature Toggles Section */}
                <section className="mt-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">Feature Toggles</h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="enableMathTracker"
                        checked={config.enableMathTracker ?? true}
                        onChange={(e) =>
                          setConfig((prev) => ({
                            ...prev,
                            enableMathTracker: e.target.checked,
                          }))
                        }
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="enableMathTracker"
                        className="ml-2 block text-sm font-medium text-gray-700"
                      >
                        Enable Math Tracker
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="enableICTHelpDesk"
                        checked={config.enableICTHelpDesk ?? true}
                        onChange={(e) =>
                          setConfig((prev) => ({
                            ...prev,
                            enableICTHelpDesk: e.target.checked,
                          }))
                        }
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="enableICTHelpDesk"
                        className="ml-2 block text-sm font-medium text-gray-700"
                      >
                        Enable ICT Helpdesk
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="enableQuizGenerator"
                        checked={config.enableQuizGenerator ?? true}
                        onChange={(e) =>
                          setConfig((prev) => ({
                            ...prev,
                            enableQuizGenerator: e.target.checked,
                          }))
                        }
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="enableQuizGenerator"
                        className="ml-2 block text-sm font-medium text-gray-700"
                      >
                        Enable Quiz Generator
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="enableLessonGenerator"
                        checked={config.enableLessonGenerator ?? true}
                        onChange={(e) =>
                          setConfig((prev) => ({
                            ...prev,
                            enableLessonGenerator: e.target.checked,
                          }))
                        }
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="enableLessonGenerator"
                        className="ml-2 block text-sm font-medium text-gray-700"
                      >
                        Enable Lesson Generator
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="enableNotebookLinks"
                        checked={config.enableNotebookLinks ?? true}
                        onChange={(e) =>
                          setConfig((prev) => ({
                            ...prev,
                            enableNotebookLinks: e.target.checked,
                          }))
                        }
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="enableNotebookLinks"
                        className="ml-2 block text-sm font-medium text-gray-700"
                      >
                        Enable NotebookLM Links
                      </label>
                    </div>
                  </div>
                </section>

                {/* Usage Limits Section */}
                <section className="mt-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">AI Usage Limits (per day)</h2>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Daily AI Limit for Teachers
                      </label>
                      <input
                        type="number"
                        id="dailyAiLimitTeacher"
                        value={config.dailyAiLimitTeacher ?? ""}
                        onChange={(e) =>
                          setConfig((prev) => ({
                            ...prev,
                            dailyAiLimitTeacher: e.target.value ? parseInt(e.target.value, 10) : null,
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        min="1"
                        placeholder="20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Daily AI Limit for Admins
                      </label>
                      <input
                        type="number"
                        id="dailyAiLimitAdmin"
                        value={config.dailyAiLimitAdmin ?? ""}
                        onChange={(e) =>
                          setConfig((prev) => ({
                            ...prev,
                            dailyAiLimitAdmin: e.target.value ? parseInt(e.target.value, 10) : null,
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        min="1"
                        placeholder="50"
                      />
                    </div>
                  </div>
                </section>

                {/* Maintenance Section */}
                <section className="mt-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">System Maintenance</h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="maintenanceMode"
                        checked={config.maintenanceMode ?? false}
                        onChange={(e) =>
                          setConfig((prev) => ({
                            ...prev,
                            maintenanceMode: e.target.checked,
                          }))
                        }
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="maintenanceMode"
                        className="ml-2 block text-sm font-medium text-gray-700"
                      >
                        Enable Maintenance Mode
                      </label>
                    </div>
                    <p className="text-sm text-gray-500">
                      When enabled, users will see a maintenance message and cannot access most features.
                    </p>
                  </div>
                </section>

                <div className="flex items-center justify-between pt-6">
                  <button
                    type="button"
                    onClick={() => router.push("/admin")}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                  >
                    Back to Admin Dashboard
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    {loading ? "Saving..." : "Save Configuration"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </RoleGuard>
      </div>
    </main>
  );
}