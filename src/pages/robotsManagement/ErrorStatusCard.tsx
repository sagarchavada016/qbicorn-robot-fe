import React from "react";

const ErrorStatusCard: React.FC = () => {
  return (
    <div className="p-6 rounded-2xl text-white w-full">
      <p className="text-lg mb-6">
        Last Error: 22-03-25;12:10:44;2000;the servo is
        OFF;2;PAL.MB6;5;200000000
      </p>

      {/* Status Bars with Custom Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
        {[
          { label: "Total power on", value: 984 },
          { label: "Servo on", value: 957 },
          { label: "Operation", value: 945 },
          { label: "Actual Operation", value: 590 },
        ].map((item, index) => (
          <React.Fragment key={index}>
            {/* Label Column - spans 3 cols on larger screens */}
            <p className="text-sm col-span-12 sm:col-span-3 text-center sm:text-left">
              {item.label}
            </p>

            {/* Progress Bar - spans 5 cols on larger screens */}
            <div className="col-span-12 sm:col-span-5 h-[30px] bg-gray-700 rounded-md">
              <div
                className="bg-[#4DE0A8] h-full rounded-md"
                style={{ width: `${(item.value / 1000) * 100}%` }}
              ></div>
            </div>

            {/* Value Column - spans 2 cols on larger screens */}
            <p className="text-sm col-span-12 sm:col-span-4 sm:col-start-9 text-center sm:text-left">
              {item.value}h
            </p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ErrorStatusCard;
