export interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (val: boolean) => void;
  isMobile?: boolean;
  isSidebarOpen?: boolean;
  setIsSidebarOpen?: (val: boolean) => void;
}

export interface Robot {
  id: string;
  model: string;
  assetId: string;
  robotModel: string;
  controllerModel: string;
  controllerSerial: string;
  controllerIP: string;
  controllerTemperature: string;
  imageUrl: string;
}
