import React from "react";
import { AlertTriangle, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F9EEFF] px-6">
      <div className="bg-white border border-[#541C9C] shadow-md rounded-2xl p-10 text-center max-w-md w-full">
        <div className="flex justify-center mb-6">
          <AlertTriangle className="text-[#541C9C] w-16 h-16" />
        </div>
        <h1 className="text-4xl font-bold text-[#541C9C] mb-2">404</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="flex items-center justify-center gap-2 bg-[#541C9C] text-white px-6 py-2 rounded-xl hover:bg-[#3f1579] transition"
        >
          <Home className="w-5 h-5" />
          Go Home
        </button>
      </div>

      {/* Decorative triangle from your theme */}
      <div className="mt-10 w-0 h-0 border-t-[12px] border-b-[12px] border-l-[18px] border-t-transparent border-b-transparent border-l-[#541C9C]"></div>
    </div>
  );
};

export default NotFound;
