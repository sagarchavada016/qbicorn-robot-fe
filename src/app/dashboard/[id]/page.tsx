"use client";
// import robotDataList from "@/data/robots";
// import RobotDetailsCard from "@/pages/dashboard/RobotDetailsCard";
import RobotsDashboard from "@/pages/robotsManagement/RobotsDashboard";
import { useParams } from "next/navigation";
// import { useRouter } from "next/router";
// import robotDataList from "@/data/robotDataList"; // Adjust path based on your project structure
// import RobotDetailsCard from "@/components/RobotDetailsCard";
// import { useEffect, useState } from "react";

const RobotDetailsPage = () => {
  const params = useParams();
  const id = Array.isArray(params?.id)
    ? params.id[0]
    : params?.id ?? "robot-001";

  return <RobotsDashboard id={id} />;
};

export default RobotDetailsPage;
