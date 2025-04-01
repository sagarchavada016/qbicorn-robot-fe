"use client";

import Chatbot from "@/components/Chatbot/Chatbot";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleResize = useCallback(() => {
    const mobileView = window.innerWidth < 768;
    setIsMobile(mobileView);
    setIsCollapsed(mobileView);
    if (mobileView) setIsSidebarOpen(false); // Ensure sidebar is hidden initially
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isMobile={isMobile}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        {isMobile && (
          <div className="flex items-center justify-between p-4 shadow-md  sticky top-0 z-10">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 bg-gray-200 rounded-lg"
            >
              <Icon icon="mdi:menu" className="text-gray-700 text-2xl" />
            </button>
            <div className="text-xl font-bold">
              <Image
                src="/assets/logos/logo-full.svg"
                alt="Logo"
                height={60}
                width={207}
                className="max-h-[40px] 2xl:max-h-[60px]"
              />
            </div>
            <div className="w-10"></div> {/* Placeholder to balance layout */}
          </div>
        )}

        <main className="flex-1 overflow-auto transition-all duration-300 px-3 lg:px-0">
          {children}
        </main>
        <Chatbot />
      </div>
    </div>
  );
}
