"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface SidebarItemProps {
  icon?: string;
  svgIcon?: string;
  label: string;
  path: string;
  isCollapsed: boolean;
  isMobile?: boolean;
}

export default function SidebarItem({
  icon,
  svgIcon,
  label,
  path,
  isCollapsed,
  isMobile,
}: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname?.startsWith(path);
  const [iconExists, setIconExists] = useState(true);

  useEffect(() => {
    if (!icon) return;
    const img = new window.Image();
    img.src = `https://api.iconify.design/${icon}.svg`;
    img.onload = () => setIconExists(true);
    img.onerror = () => setIconExists(false);
  }, [icon]);

  return (
    <Link
      href={path}
      className={`flex items-center font-medium gap-4 py-3 2xl:py-4 rounded-lg cursor-pointer transition 
      ${isCollapsed && !isMobile ? "justify-center" : "pl-2 2xl:pl-6"} 
      ${
        isActive
          ? "bg-[#3C4235] border-r-4 border-[#65BD5D]"
          : "hover:bg-[#3C4235] hover:border-r-4 hover:border-[#65BD5D]"
      }`}
    >
      {iconExists && icon ? (
        <Icon icon={icon} className="text-white text-2xl" />
      ) : svgIcon ? (
        <Image src={svgIcon} alt={label} width={24} height={24} />
      ) : (
        <Icon icon="mdi:alert-circle-outline" className="text-white text-2xl" />
      )}

      {!isCollapsed && (
        <span className="text-white text-sm 2xl:text-lg">{label}</span>
      )}
      {isMobile && (
        <span className="text-white text-sm 2xl:text-base">{label}</span>
      )}
    </Link>
  );
}
