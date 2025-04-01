import React, { Suspense } from "react";
import RobotsDashboardTabs from "./RobotsDashboardTabs";

const RobotsDashboard = () => {
  return (
    <Suspense fallback={<div className="text-white">Loading...</div>}>
      <RobotsDashboardTabs />
    </Suspense>
  );
};

export default RobotsDashboard;
