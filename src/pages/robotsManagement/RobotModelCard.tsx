import Image from "next/image";
import React from "react";

const RobotModelCard = () => {
  return (
    <div className="p-6 sm:p-8">
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-center">
        <h2 className="text-white text-lg sm:text-xl font-medium">
          Robot Model XR-345
        </h2>
        <div className="flex items-center gap-2">
          <Image src="/assets/svg/wifi.svg" width={24} height={24} alt="wifi" />
          <Image
            src="/assets/svg/battery.svg"
            width={24}
            height={24}
            alt="battery"
          />
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 items-center">
        {/* Left Text Section */}
        <div className="md:col-span-6 lg:col-span-6 xl:col-span-5  flex flex-col gap-3 text-sm">
          {[
            { label: "Asset ID", value: "Essen, RV7-FRLM-" },
            { label: "Robot Model", value: "Rv-7CJD6-D" },
            { label: "Controller model", value: "NCKSBCH-D" },
            { label: "Contr. Serial No.", value: "ABDHS834B" },
            { label: "Controller IP", value: "192.168.0.20" },
            { label: "Contr. Temperature", value: "41°C" },
          ].map((item, index) => (
            <div key={index} className="grid grid-cols-2">
              <p className="text-gray-300">{item.label}</p>
              <p className="text-[#CCFFB7]">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Center Image Section */}
        <div className="md:col-span-6 lg:col-span-6 xl:col-span-3 flex justify-center">
          <Image
            src="/assets/images/machines/machine.png"
            alt="Robot"
            className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[242px] object-cover"
            height={242}
            width={202}
            priority
          />
        </div>

        {/* Right Text Section */}
        <div className="md:col-span-4 lg:col-span-6 xl:col-span-4 flex flex-col gap-6">
          {/* Battery Info */}
          <div className="border-b-4 border-[#4DE0A8] pb-3">
            <p className="text-sm font-semibold">Battery remaining</p>
            <p className="text-sm font-semibold">8012h</p>
          </div>

          {/* Accumulated Hours */}
          <div className="border-b-4 border-[#4DE0A8] pb-3">
            <p className="text-sm font-semibold">Accumulated</p>
            <p className="text-sm font-semibold">15813h</p>
          </div>

          {/* Robot Status */}
          <div>
            <p className="py-2">Robot Status:</p>
            <p className="text-[#5FD3A7] font-medium">Operating</p>
            <p className="text-[#CCFFB7] font-medium">
              Operating / All Running
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotModelCard;
