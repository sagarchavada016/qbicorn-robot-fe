"use client";

import { useSearchParams, useRouter } from "next/navigation";
import OverviewTab from "./OverviewTab";
import { useEffect, useState } from "react";
import robotDataList from "@/data/robots";
import { Robot } from "@/types/types";

const Analytics = () => (
  <div className="text-gray-700">📈 Analytics Content</div>
);

interface RobotsDashboardTabsProps {
  id: string;
}

const RobotsDashboardTabs = ({ id }: RobotsDashboardTabsProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = searchParams?.get("tab") || "overview";

  const [robotData, setRobotData] = useState<Robot | null>(null);
  console.log("robotData: ", robotData);

  useEffect(() => {
    if (id) {
      const foundRobot = robotDataList?.find((robot) => robot.id === id);
      setRobotData(foundRobot || null);
    }
  }, [id]);

  if (!robotData) {
    return (
      <div className="text-center text-white mt-10">
        <p>Robot not found!</p>
      </div>
    );
  }

  // Function to change tabs
  const handleTabChange = (tabId: string) => {
    router.push(`?tab=${tabId}`, { scroll: false });
  };

  const tabs = [
    {
      name: "Overview",
      id: "overview",
      component: <OverviewTab robotData={robotData} />,
    },
    { name: "Trends", id: "Trends", component: <Analytics /> },
    { name: "Point Details", id: "pointdetails", component: <Analytics /> },
    // { name: "Alarms", id: "alarms", component: <Settings /> },
    // {
    //   name: "Reference Systems",
    //   id: "referencesystems",
    //   component: <Settings />,
    // },
  ];

  return (
    <div className="w-full py-[15px] lg:pr-[25px]">
      <div className="rounded-[16px] xl:mb-[20px] mb-[15px] bg-gradient-qbi box-shadow-qbi">
        <div className="py-3 2xl:pt-6 2xl:pb-6 px-4 md:px-6 lg:px-[25px]">
          <p className="text-sm md:text-base 2xl:text-[20px] font-medium font-poppins">
            Robots Maintenance
          </p>
        </div>

        {/* Mobile-Friendly Tabs */}
        <div className="flex overflow-x-auto scrollbar-hide bg-[#242424] px-4 md:px-6 lg:px-[30px] py-[7px] rounded-b-[16px] space-x-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-4 md:px-6 2xl:px-[20px] py-[8px] font-poppins text-white text-xs md:text-sm font-medium transition-all whitespace-nowrap rounded-md ${
                activeTab === tab.id
                  ? "bg-[#3C4235] border-b-2 border-[#65BD5D] shadow-md"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Active Tab Content */}
      <div className="">
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </div>
    </div>
  );
};

export default RobotsDashboardTabs;
