import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserLogout() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  console.log("token", token);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/users/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Logout error:", error);
        navigate("/login");
      });
  }, [navigate, token]);

  return (
    <>
      <h1>UserLogout</h1>
    </>
  );
}

export default UserLogout;
