"use client";

import React from "react";
import MaintenanceTable from "./MaintenanceTable";
import ErrorStatusCard from "./ErrorStatusCard";
import RobotModelCard from "./RobotModelCard";
import RadialChart from "@/components/RadialChart/RadialChart";

const tableData1 = {
  tableTitle: "Position of Axes J1 to J6",
  columns: ["Axis [ mm ]", "", "J1", "J2", "J3", "J4", "J5", "J6"],
  data: [
    ["Axis [ mm ]", "", 1.21, 1.034, 0.333, 0.097, 1.04, 0.303],
    ["Load rate [ % ]", "", 4.271, 0.0, 0.88, 0.39, 2.15, 0.546],
  ],
};

const tableData2 = {
  tableTitle: "Consumption Degree Maintenance Parts [%]",
  columns: [
    "Parameter",
    "",
    "Value 1",
    "Value 2",
    "Value 3",
    "Value 4",
    "Value 5",
    "Value 6",
  ],
  data: [
    ["Grease", "", 2.5, 3.1, 4.0, 2.8, 3.5, 4.2],
    ["Timing Belt", "", 85, 90, 88, 92, 87, 89],
  ],
};

const OverviewTab: React.FC = () => {
  return (
    <div className="">
      {/* First Row */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        {/* Left: Robot Info */}
        <div className="xl:col-span-12 2xl:col-span-7 rounded-2xl bg-gradient-qbi box-shadow-qbi">
          <RobotModelCard />
        </div>

        {/* Right: Performance Metrics (Separated Charts) */}
        <div className="xl:col-span-12 2xl:col-span-5 grid grid-cols-1 md:grid-cols-2 bg-gradient-qbi rounded-2xl">
          {/* Chart 1 */}
          <div className="p-6 rounded-2xl  flex flex-col items-center justify-center">
            <h3 className="text-white text-base font-medium text-center mb-4">
              Robot Performance
            </h3>
            <RadialChart
              data={78}
              color="var(--primary)"
              label=" Robot Performance"
            />
          </div>

          {/* Chart 2 */}
          <div className="p-6 rounded-2xl  flex flex-col items-center justify-center">
            <h3 className="text-white text-base font-medium text-center mb-4">
              Battery Status
            </h3>
            <RadialChart
              data={78}
              color="var(--primary)"
              label="Battery Life"
            />
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 mt-4">
        {/* Left: Error Status */}
        <div className="xl:col-span-12 2xl:col-span-7 rounded-2xl bg-gradient-qbi box-shadow-qbi">
          <ErrorStatusCard />
        </div>

        {/* Right: Consumption Metrics (Separated Charts) */}
        <div className="xl:col-span-12 2xl:col-span-5 grid grid-cols-1 md:grid-cols-2 bg-gradient-qbi rounded-2xl">
          {/* Chart 3 */}
          <div className="p-6 rounded-2xl  flex flex-col items-center justify-center">
            <h3 className="text-white text-base font-medium text-center mb-4">
              Total Consumption Maint. Parts
            </h3>
            <RadialChart data={40} color="#879EE4" label="Median Ratio" />
          </div>

          {/* Chart 4 */}
          <div className="p-6 rounded-2xl  flex flex-col items-center justify-center">
            <h3 className="text-white text-base font-medium text-center mb-4">
              Total Consumption Overhaul Parts
            </h3>
            <RadialChart data={10} color="#879EE4" label="Median Ratio" />
          </div>
        </div>
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-1 2xl:grid-cols-12 gap-4 mt-4">
        {/* Maintenance Table 1 */}
        <div className="2xl:col-span-5 p-6 rounded-2xl bg-gradient-qbi box-shadow-qbi">
          <MaintenanceTable {...tableData1} />
        </div>

        {/* Maintenance Table 2 */}
        <div className="2xl:col-span-7 p-6 rounded-2xl bg-gradient-qbi box-shadow-qbi">
          <MaintenanceTable {...tableData2} />
        </div>

        {/* Extra Space */}
        <div className="hidden 2xl:block 2xl:col-span-5"></div>

        {/* Maintenance Table 3 */}
        <div className="2xl:col-span-7 p-6 rounded-2xl bg-gradient-qbi box-shadow-qbi">
          <MaintenanceTable {...tableData1} />
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
