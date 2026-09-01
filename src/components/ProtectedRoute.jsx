import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("apiToken") || localStorage.getItem("token");

  // No token -> redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Verify expiration (exp is in seconds)
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    if (payload.exp * 1000 < Date.now()) {
      // Token expired – clean up and force login
      localStorage.removeItem("apiToken");
      localStorage.removeItem("token");
      return <Navigate to="/login" replace />;
    }
  } catch (e) {
    // Invalid token format – treat as unauthenticated
    return <Navigate to="/login" replace />;
  }

  return children;
}