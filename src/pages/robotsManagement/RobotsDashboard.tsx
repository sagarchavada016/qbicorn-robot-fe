import React, { Suspense } from "react";
import RobotsDashboardTabs from "./RobotsDashboardTabs";

interface RobotsDashboardProps {
  id: string;
}

const RobotsDashboard = ({ id }: RobotsDashboardProps) => {
  return (
    <Suspense fallback={<div className="text-white">Loading...</div>}>
      <RobotsDashboardTabs id={id} />
    </Suspense>
  );
};

export default RobotsDashboard;
