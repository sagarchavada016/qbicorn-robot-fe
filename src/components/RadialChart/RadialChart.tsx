import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const getChartHeight = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth < 480 ? 120 : window.innerWidth < 768 ? 150 : 250;
  }
  return 250; // Default height
};

interface RadialChartProps {
  data: number;
  color: string;
  label: string;
}

const RadialChart: React.FC<RadialChartProps> = ({ data, color, label }) => {
  const [chartHeight, setChartHeight] = useState(getChartHeight());

  useEffect(() => {
    const handleResize = () => setChartHeight(getChartHeight());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chartOptions = {
    series: [data],
    options: {
      chart: {
        type: "radialBar" as const,
      },
      plotOptions: {
        radialBar: {
          startAngle: -110,
          endAngle: 110,
          hollow: {
            size: "70%",
          },
          dataLabels: {
            name: {
              show: false,
              fontSize: "16px",
              color: color || "#fff",
              formatter: (name: string) => name,
            },
            value: {
              color: "#fff",
              offsetY: 50,
              fontSize: "26px",
              fontFamily: "Poppins",
            },
          },
        },
      },
      fill: {
        colors: [color || "var(--primary)"],
      },
      stroke: {
        lineCap: "round" as "round" | "butt" | "square",
      },
      labels: [label],
    },
  };

  return (
    <Chart
      options={chartOptions.options}
      series={chartOptions.series}
      type="radialBar"
      height={chartHeight}
    />
  );
};

export default RadialChart;
