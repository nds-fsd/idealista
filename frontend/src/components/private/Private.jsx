import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { Navigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

export default function Private({ children }) {
  const { user, isLoggedIn, loading } = useContext(UserContext);

  if (loading) {
    return <CircularProgress />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}
