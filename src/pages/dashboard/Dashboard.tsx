"use client";
import React, { useState } from "react";
import RobotDetailsCard from "./RobotDetailsCard";
import { Icon } from "@iconify/react/dist/iconify.js";
import robotDataList from "@/data/robots";

// const robotDataList = [
//   {
//     model: "Robot Model XR-345",
//     assetId: "Essen, RV7-FRLM-",
//     robotModel: "Rv-7CJD6-D",
//     controllerModel: "NCKSBCH-D",
//     controllerSerial: "ABDHS834B",
//     controllerIP: "192.168.0.20",
//     controllerTemperature: "41°C",
//     imageUrl: "/assets/images/machines/machine.png",
//   },
//   {
//     model: "Robot Model XR-567",
//     assetId: "Berlin, RV8-GHLM-",
//     robotModel: "Rv-8XYZ-D",
//     controllerModel: "NCKSBCH-E",
//     controllerSerial: "XYZ123456",
//     controllerIP: "192.168.0.21",
//     controllerTemperature: "39°C",
//     imageUrl: "/assets/images/machines/machine.png",
//   },
//   {
//     model: "Robot Model XR-789",
//     assetId: "Munich, RV9-PLKM-",
//     robotModel: "Rv-9ABC-D",
//     controllerModel: "NCKSBCH-F",
//     controllerSerial: "LMN987654",
//     controllerIP: "192.168.0.22",
//     controllerTemperature: "42°C",
//     imageUrl: "/assets/images/machines/machine.png",
//   },
// ];

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter robots based on search input
  const filteredRobots = robotDataList?.filter((robot) =>
    robot.model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Search Bar & Add Button */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        {/* Search Bar */}
        <div className="relative w-full md:w-1/3">
          <Icon
            icon="material-symbols:search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            width={20}
            height={20}
          />
          <input
            type="text"
            placeholder="Search robots..."
            className="w-full pl-10 pr-4 py-2 px-4 rounded-md border border-[#6B6B6B] text-white focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Add New Product Button */}
        <button className="flex items-center gap-2 px-6 py-5 bg-gradient-qbi  rounded-md  transition">
          <Icon icon="material-symbols:add" width={20} height={20} />
          Add New Product
        </button>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-6">
        {filteredRobots.length > 0 ? (
          filteredRobots.map((robot, index) => (
            <RobotDetailsCard key={index} data={robot} />
          ))
        ) : (
          <p className="text-white text-center col-span-full">
            No matching robots found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
