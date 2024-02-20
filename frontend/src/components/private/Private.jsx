import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { Navigate } from "react-router-dom";

export default function Private({ children }) {
  const { user, isLoggedIn, loading } = useContext(UserContext);

  if (loading) {
    return <p>Loading ...</p>;
  }

  if (isLoggedIn) {
    return <Navigate to="/login" />;
  }
  if (user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
