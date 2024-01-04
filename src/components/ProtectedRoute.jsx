import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ isAllowed, redirectTo, children }) {
  // console.log(isAllowed, redirectTo);
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
}
