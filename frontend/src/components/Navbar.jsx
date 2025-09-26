import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };
console.log(user)
   const firstLetter = user?.username?.charAt(0).toUpperCase() || '';

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
          GKS-HUB
        </Link>
        <div>
          {user ? (
            <>
            <div className="flex items-center space-x-4">
        {/* Avatar Circle with First Letter */}
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold text-lg">
          {firstLetter}
        </div>
      
            <button
              onClick={handleLogout}
              className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
            </div>
            
            </>
          ) : (
            <>
              <Link className="text-white mx-2 hover:underline" to="/login">
                Login
              </Link>
              <Link className="text-white mx-2 hover:underline" to="/register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;