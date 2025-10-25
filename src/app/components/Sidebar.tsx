"use client";

import { useState } from "react";
import {
  Home as HomeIcon,
  Package,
  MessageSquare,
  FileText,
  Users,
  Settings,
  LogOut,
  Menu,
  X
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [hovered, setHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: "Dashboard", icon: <HomeIcon size={20} />, href: "/" },
    { label: "Packages", icon: <Package size={20} />, href: "/packages" },
    { label: "Chats", icon: <MessageSquare size={20} />, href: "/chats" },
    { label: "Reports", icon: <FileText size={20} />, href: "/reports" },
    { label: "Team", icon: <Users size={20} />, href: "/team" },
    { label: "Settings", icon: <Settings size={20} />, href: "/settings" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900 text-white rounded-lg shadow-lg"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Sidebar */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`hidden lg:block fixed top-0 left-0 h-screen bg-gray-900 text-white z-50 shadow-xl flex flex-col justify-between transition-transform duration-300 ease-in-out
          ${hovered ? "translate-x-0" : "-translate-x-[150px]"} w-56`}
      >
        <div>
          <div className="flex items-center justify-center py-4 border-b border-gray-700">
            <span className="text-xl font-bold text-purple-400">TripClap</span>
          </div>

          <nav className="mt-6 flex flex-col space-y-1 px-2">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center justify-between px-4 py-3 rounded-md transition-colors ${
                  isActive(item.href)
                    ? "bg-purple-600 text-white"
                    : "hover:bg-gray-800 text-gray-300"
                }`}
              >
                <span className="text-sm font-medium">{item.label}</span>
                {item.icon}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-gray-700">
          <Link
            href="/logout"
            className="flex items-center justify-between px-4 py-3 hover:bg-gray-800 transition-colors text-gray-300"
          >
            <span className="text-sm font-medium">Logout</span>
            <LogOut size={20} />
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-screen bg-gray-900 text-white z-40 shadow-xl flex flex-col justify-between transition-transform duration-300 ease-in-out w-64 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between py-4 px-4 border-b border-gray-700">
            <span className="text-xl font-bold text-purple-400">TripClap</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1 hover:bg-gray-800 rounded"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="mt-6 flex flex-col space-y-1 px-2">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-md transition-colors ${
                  isActive(item.href)
                    ? "bg-purple-600 text-white"
                    : "hover:bg-gray-800 text-gray-300"
                }`}
              >
                <span className="text-sm font-medium">{item.label}</span>
                {item.icon}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-gray-700">
          <Link
            href="/logout"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-between px-4 py-3 hover:bg-gray-800 transition-colors text-gray-300"
          >
            <span className="text-sm font-medium">Logout</span>
            <LogOut size={20} />
          </Link>
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
