import Image from "next/image";
import React from "react";

interface RobotDetails {
  model: string;
  assetId: string;
  robotModel: string;
  controllerModel: string;
  controllerSerial: string;
  controllerIP: string;
  controllerTemperature: string;
  imageUrl: string;
}

interface RobotDetailsCardProps {
  data: RobotDetails;
}

const RobotDetailsCard: React.FC<RobotDetailsCardProps> = ({ data }) => {
  return (
    <div className="bg-gradient-qbi rounded-2xl box-shadow-qbi p-6 sm:p-8">
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-center">
        <h2 className="text-white text-lg sm:text-xl font-medium">
          {data.model}
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
      <div className="grid grid-cols-1 md:grid-cols-1 2xl:grid-cols-12 gap-6 mt-6 items-center">
        {/* Left Text Section */}
        <div className="md:col-span-1 2xl:col-span-7  flex flex-col gap-3 text-sm">
          {[
            { label: "Asset ID", value: data.assetId },
            { label: "Robot Model", value: data.robotModel },
            { label: "Controller Model", value: data.controllerModel },
            { label: "Contr. Serial No.", value: data.controllerSerial },
            { label: "Controller IP", value: data.controllerIP },
            { label: "Contr. Temperature", value: data.controllerTemperature },
          ].map((item, index) => (
            <div key={index} className="grid grid-cols-2">
              <p className="text-gray-300">{item.label}</p>
              <p className="text-[#CCFFB7]">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Center Image Section */}
        <div className="md:col-span-1 2xl:col-span-5 flex justify-center">
          <Image
            src={data.imageUrl}
            alt="Robot"
            className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[242px] object-cover"
            height={242}
            width={202}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default RobotDetailsCard;
