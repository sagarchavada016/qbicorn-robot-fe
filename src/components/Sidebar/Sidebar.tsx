"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import SidebarItem from "./SidebarItem";
import { SidebarProps } from "@/types/types";

const sidebarItems = [
  { label: "Dashboard", path: "/dashboard", icon: "humbleicons:dashboard" },
  {
    label: "Robots Maintenance",
    path: "/robots-management",
    icon: "mi:layers",
  },
  { label: "Analytics", path: "/analytics", icon: "mdi:chart-bar" },
  { label: "Planning", path: "/planing", icon: "mdi:calendar-month" },
  { label: "Terminal", path: "/terminal", icon: "mdi:console" },
  { label: "Agents", path: "/agents", icon: "mdi:robot" },
  { label: "Settings", path: "/settings", icon: "tdesign:setting" },
];

export default function Sidebar({
  isCollapsed,
  setIsCollapsed,
  isMobile,
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarProps) {
  return (
    <>
      {/* Backdrop for Mobile */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsSidebarOpen && setIsSidebarOpen(false)}
        ></div>
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-screen transition-transform duration-300 p-3 ${
          isMobile && !isSidebarOpen ? "-translate-x-full" : "translate-x-0"
        } md:relative md:translate-x-0`}
      >
        <div
          className={`flex flex-col h-full rounded-2xl transition-all shadow-lg ${
            isCollapsed && !isMobile
              ? "w-20 p-2"
              : "w-[275px] 2xl:w-[300px] p-4 2xl:p-6"
          }`}
          style={{
            background:
              "linear-gradient(134deg, #4E4E4E -16%, #333 9%, #1A1A1A 32%, #1A1A1A 62%, #262626 87%, #4E4E4E 112%)",
            boxShadow: "2px 6px 15px 2px rgba(12, 10, 11, 0.8)",
          }}
        >
          {/* Logo Section */}
          <div className="flex justify-between items-center px-3 pt-4">
            {!isCollapsed ? (
              <Image
                src="/assets/logos/logo-full.svg"
                alt="Logo"
                width={207}
                height={100}
                className="max-h-[80px] 2xl:max-h-[200px]"
              />
            ) : (
              <Image
                src="/assets/logos/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="max-h-[50px] h-full object-contain"
              />
            )}
            {isMobile && (
              <button
                onClick={() => setIsSidebarOpen && setIsSidebarOpen(false)}
                className="text-white"
              >
                <Icon icon="mdi:close" className="text-2xl" />
              </button>
            )}
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col gap-2 2xl:gap-6 mt-8">
            {sidebarItems.map((item) =>
              item.label === "Dashboard" ? (
                <SidebarItem
                  key={item.path}
                  {...item}
                  isCollapsed={isCollapsed}
                  isMobile={isMobile}
                />
              ) : (
                <div
                  key={item.label}
                  className={`flex items-center gap-4 font-medium py-3 px-3 rounded-lg transition-all text-white ${
                    isCollapsed && !isMobile ? "justify-center px-0" : "pl-3"
                  } hover:bg-[#3C4235]`}
                >
                  <Icon icon={item.icon} className="text-white text-2xl" />
                  {!isCollapsed && (
                    <span className="text-white text-sm 2xl:text-lg">
                      {item.label}
                    </span>
                  )}
                </div>
              )
            )}
          </nav>

          {/* Collapse Button */}
          <button
            className="hidden md:flex mt-auto justify-center items-center p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <Icon
              icon="mdi:chevron-left"
              className={`text-white text-2xl transition-transform ${
                isCollapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </aside>
    </>
  );
}
