// src/components/dashboard/DashboardLayout.tsx

import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface DashboardLayoutProps {
  children: ReactNode;
}

const menuItems = [
  { label: "Dashboard", path: "/dashboard", icon: "📊" },
  { label: "Users", path: "/dashboard/users", icon: "👤" },
  { label: "Settings", path: "/dashboard/settings", icon: "⚙️" },
  // Add more menu links as needed
];

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        <div className="h-16 flex items-center justify-center border-b text-xl font-bold">
          Admin Dashboard
        </div>
        <nav className="flex-1 px-2 py-4 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition"
            >
              <span className="text-lg mr-3">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Your Company
        </div>
      </aside>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white shadow flex items-center justify-between px-6">
          <span className="font-semibold text-lg">Welcome, Admin</span>
          <div className="flex items-center space-x-4">
            <button className="relative hover:bg-gray-100 p-2 rounded">
              <span>🔔</span>
            </button>
            <img
              src="https://ui-avatars.com/api/?name=Admin"
              alt="Admin"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </header>
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
