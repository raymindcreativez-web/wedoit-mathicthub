"use client";

import { ReactNode } from "react";
import { useAuth } from "@/context/AuthContext";
import { UserRole } from "@/types/user";

export default function RoleGuard({
  allowedRoles,
  children,
}: {
  allowedRoles: UserRole[];
  children: ReactNode;
}) {
  const { appUser, loading } = useAuth();

  if (loading) {
    return <p>Checking permission...</p>;
  }

  if (!appUser || !allowedRoles.includes(appUser.role)) {
    return (
      <div className="rounded-xl bg-red-50 p-4 text-sm text-red-700">
        You do not have permission to view this section.
      </div>
    );
  }

  return <>{children}</>;
}