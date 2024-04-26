// Logout.js
import React, { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    // Clear the token from localStorage or perform any other logout actions here
    window.localStorage.removeItem("token");
    // Redirect to the login page after logout
    window.location.href = "/";
  }, []);

  return null; // or you can render a message or component if needed
};

export default Logout;
