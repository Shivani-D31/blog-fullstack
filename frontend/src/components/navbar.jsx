import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  console.log(process.env.REACT_APP_BASE_URL);
  const handleSignout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Link to={"/"}>
        <h1>Home</h1>
      </Link>
      {!token && (
        <div>
          <Link to={"/signup"}>
            <h1>Create Account</h1>
          </Link>
          <Link to={"/login"}>
            <h1>Sign in</h1>
          </Link>
        </div>
      )}

      <Link to={"/myblogs"}>
        <h1>My Blogs</h1>
      </Link>

      <h1 onClick={handleSignout}>Signout</h1>
    </div>
  );
}

export default Navbar;
