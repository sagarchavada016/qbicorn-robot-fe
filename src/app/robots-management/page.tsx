import DashboardLayout from "@/layouts/DashboardLayout";
import RobotsDashboard from "@/pages/robotsManagement/RobotsDashboard";
import React from "react";

const page = () => {
  return (
    <DashboardLayout>
      <RobotsDashboard />
    </DashboardLayout>
  );
};

export default page;
