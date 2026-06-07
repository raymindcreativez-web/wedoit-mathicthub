"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/lib/auth";
import { UserRole } from "@/types/user";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<UserRole>("teacher");
  const [password, setPassword] = useState("");
  const [schoolId, setSchoolId] = useState("default-school");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Map Firebase error codes to user-friendly messages
  const getFirebaseErrorMessage = (errorCode: string): string => {
    switch (errorCode) {
      case "auth/email-already-in-use":
        return "The email address is already registered. Please use a different email or sign in.";
      case "auth/invalid-email":
        return "The email address is not valid. Please enter a valid email address.";
      case "auth/operation-not-allowed":
        return "Email/password accounts are not enabled. Please contact support.";
      case "auth/weak-password":
        return "The password is too weak. Please choose a stronger password.";
      case "auth/user-disabled":
        return "This account has been disabled. Please contact support.";
      case "auth/user-not-found":
        return "No user found with this email. Please check your email or sign up.";
      case "auth/wrong-password":
        return "Invalid password. Please try again.";
      case "auth/too-many-requests":
        return "Too many requests. Please try again later.";
      default:
        return "An error occurred during registration. Please try again.";
    }
  };

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await registerUser({
        name,
        email,
        password,
        role,
        schoolId,
      });

      router.push("/dashboard");
    } catch (err: any) {
      // Handle Firebase errors
      if (err.code) {
        setError(getFirebaseErrorMessage(err.code));
      } else {
        // Fallback to original error message if no Firebase error code
        setError(err.message || "Failed to register user.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow">
        <h1 className="text-2xl font-bold">Create Account</h1>
        <p className="mt-1 text-sm text-slate-600">
          Register your MathICT AI Hub account.
        </p>

        <form onSubmit={handleRegister} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              className="mt-1 w-full rounded-lg border p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Juan Dela Cruz"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              className="mt-1 w-full rounded-lg border p-2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="teacher@school.edu.ph"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Role</label>
            <select
              className="mt-1 w-full rounded-lg border p-2"
              value={role}
              onChange={(e) => setRole(e.target.value as UserRole)}
            >
              <option value="teacher">Teacher</option>
              <option value="ict_coordinator">ICT Coordinator</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">School ID</label>
            <input
              className="mt-1 w-full rounded-lg border p-2"
              value={schoolId}
              onChange={(e) => setSchoolId(e.target.value)}
              required
              placeholder="default-school"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              className="mt-1 w-full rounded-lg border p-2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              placeholder="At least 6 characters"
            />
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 p-2 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 p-2 font-medium text-white disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>

          {/* Link to go back to homepage if registration fails or user wants to go back */}
          <div className="mt-4 text-center">
            <a
              href="/"
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Back to Home
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}