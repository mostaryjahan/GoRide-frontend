import { Navigate, useLocation } from "react-router-dom";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { data: userInfo, isLoading, error } = useUserInfoQuery({});
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !userInfo?.data) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const user = userInfo.data;

  // Check if user is blocked or suspended
  if (user.isBlock === 'BLOCK') {
    return <Navigate to="/account-status" replace />;
  }

  // Check role permissions
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
}