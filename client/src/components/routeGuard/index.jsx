import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const RouteGuard = ({ authenticate, user, element }) => {
  const location = useLocation();

  // Not logged in → go to login
  if (!authenticate && !location.pathname.includes("/auth")) {
    return <Navigate to="/auth" replace />;
  }

  // Already logged in, prevent going back to auth page
  if (authenticate && location.pathname.includes("/auth")) {
    if (user?.role === "instructor") return <Navigate to="/instructor" replace />;
    return <Navigate to="/home" replace />;
  }

  // Logged in but wrong role for the path
  if (
    authenticate &&
    user?.role === "student" &&
    location.pathname.includes("/instructor")
  ) {
    return <Navigate to="/home" replace />;
  }

  if (
    authenticate &&
    user?.role === "instructor" &&
    location.pathname.includes("/home")
  ) {
    return <Navigate to="/instructor" replace />;
  }

  // All good, allow access
  return <>{element}</>;
};

export default RouteGuard;
