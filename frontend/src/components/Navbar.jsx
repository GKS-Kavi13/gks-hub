import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut, FiLogIn, FiUserPlus, FiMenu } from "react-icons/fi";

const Navbar = ({ user, setUser, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  const firstLetter = user?.username?.charAt(0).toUpperCase() || '';

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {user && (
            <button
              onClick={toggleSidebar}
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
              title="Toggle Sidebar"
            >
              <FiMenu size={24} />
            </button>
          )}

          <Link
            to="/"
            className="text-lg font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent"
          >
            GKS-HUB
          </Link>
        </div>

        <div>
          {user ? (
            <div className="flex items-center space-x-4">
              {/* Avatar Circle */}
              <div className="w-11 h-11 rounded-full bg-gradient-to-r from-blue-500 to-green-500 p-[2px]">
                <div className="w-full h-full flex items-center justify-center rounded-full bg-white text-blue-600 font-bold text-lg cursor-pointer">
                  {firstLetter}
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="text-red-600 hover:text-red-800 cursor-pointer"
                title="Logout"
              >
                <FiLogOut size={22} />
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="mx-2 inline-flex items-center gap-1 text-base font-semibold text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300"
              >
                <FiLogIn className="text-sm" />
                Login
              </Link>

              <Link
                to="/register"
                className="mx-2 inline-flex items-center gap-1 text-base font-semibold text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300"
              >
                <FiUserPlus className="text-sm" />
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
