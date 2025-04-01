import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";

const page = () => {
  return (
    <DashboardLayout>
      <div className="w-full py-[40px] pr-[25px] ">
        <div
          className="rounded-[16px] mb-[52px]"
          style={{
            background:
              "linear-gradient(134deg, #4E4E4E -16.04%, #333 9.33%, #1A1A1A 32.02%, #1A1A1A 62.06%, #262626 87.42%, #4E4E4E 112.12%)",
            boxShadow: "2px 6px 15px 2px rgba(12, 10, 11, 0.8)",
          }}
        >
          <div className="pt-[30px] pb-[30px] px-[25px]">
            <p className="text-[22px] font-semibold font-poppins">Settings</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default page;
