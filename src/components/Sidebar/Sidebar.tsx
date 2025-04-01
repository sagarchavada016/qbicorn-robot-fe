"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (val: boolean) => void;
  isMobile?: boolean;
  isSidebarOpen?: boolean;
  setIsSidebarOpen?: (val: boolean) => void;
}

const sidebarItems = [
  { label: "Dashboard", path: "/dashboard", icon: "humbleicons:dashboard" },
  {
    label: "Robots Maintenance",
    path: "/robots-management",
    icon: "mi:layers",
  },
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
          className="fixed inset-0 bg-[#00000059] z-40"
          onClick={() => setIsSidebarOpen && setIsSidebarOpen(false)}
        ></div>
      )}

      <div
        className={`fixed p-[15px] top-0 left-0 h-screen z-50 transition-transform duration-300 md:relative md:translate-x-0 ${
          isMobile && !isSidebarOpen ? "-translate-x-[300px]" : "translate-x-0"
        }`}
      >
        <div
          className={`h-full transition-all flex flex-col gap-10 flex-shrink-0 shadow-[var(--shadow)] ${
            isCollapsed && !isMobile
              ? "w-20 p-2"
              : "w-[275px] 2xl:w-[300px] p-3 2xl:p-6"
          } rounded-[16px]`}
          style={{
            background:
              "linear-gradient(134deg, #4E4E4E -16.04%, #333 9.33%, #1A1A1A 32.02%, #1A1A1A 62.06%, #262626 87.42%, #4E4E4E 112.12%)",
            boxShadow: "2px 6px 15px 2px rgba(12, 10, 11, 0.8)",
          }}
        >
          <div className="flex justify-between items-center pt-4 md:pt-3 2xl:pt-2 px-3">
            {!isCollapsed ? (
              <Image
                src="/assets/logos/logo-full.svg"
                alt="Logo"
                height={60}
                width={207}
                className="max-h-[40px] 2xl:max-h-[60px]"
              />
            ) : (
              <Image
                src="/assets/logos/logo.svg"
                alt="Logo Icon"
                height={40}
                width={40}
                className="max-h-[40px] 2xl:max-h-[60px]"
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

          <nav className="flex flex-col gap-2 2xl:gap-6">
            {sidebarItems.map((item) => (
              <SidebarItem
                key={item.path}
                icon={item.icon}
                label={item.label}
                path={item.path}
                isCollapsed={isCollapsed}
                isMobile={isMobile}
              />
            ))}
          </nav>

          <button
            className="hidden mt-auto md:flex items-center justify-center p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <Icon
              icon="mdi:chevron-left"
              className={`text-white text-2xl transition ${
                isCollapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </>
  );
}
