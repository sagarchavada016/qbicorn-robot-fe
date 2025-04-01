"use client";

import { useSearchParams, useRouter } from "next/navigation";
import OverviewTab from "./OverviewTab";

const Analytics = () => (
  <div className="text-gray-700">📈 Analytics Content</div>
);
// const Settings = () => <div className="text-gray-700">⚙️ Settings Content</div>;

const tabs = [
  { name: "Overview", id: "overview", component: <OverviewTab /> },
  { name: "Trends", id: "Trends", component: <Analytics /> },
  { name: "Point Details", id: "pointdetails", component: <Analytics /> },
  // { name: "Alarms", id: "alarms", component: <Settings /> },
  // {
  //   name: "Reference Systems",
  //   id: "referencesystems",
  //   component: <Settings />,
  // },
];

const RobotsDashboardTabs = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = searchParams?.get("tab") || "overview";

  // Function to change tabs
  const handleTabChange = (tabId: string) => {
    router.push(`?tab=${tabId}`, { scroll: false });
  };

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
