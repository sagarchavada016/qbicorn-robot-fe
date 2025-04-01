import React from "react";

interface MaintenanceTableProps {
  tableTitle?: string;
  columns?: string[];
  data?: (string | number)[][];
}

const MaintenanceTable: React.FC<MaintenanceTableProps> = ({
  tableTitle = "Maintenance Table", // Default title
  columns = [], // Empty array as default to prevent errors
  data = [], // Empty array to avoid undefined issues
}) => {
  return (
    <div className="rounded-[16px] overflow-hidden">
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[600px] text-white text-sm border-collapse">
          <tbody>
            {/* Header Row */}
            <tr className="">
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2 text-[20px] rounded-l-lg">1</td>
              <td
                className="p-2 text-[16px] 2xl:text-[20px] text-center"
                colSpan={4}
              >
                {tableTitle}
              </td>
              <td className="p-2 text-[20px] rounded-r-lg text-center">
                {columns.length > 2 ? columns.length - 2 : 0}
              </td>
            </tr>

            {/* Data Rows */}
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr key={rowIndex} className="">
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={`p-2 whitespace-nowrap ${
                        cellIndex === 0
                          ? "text-[16px] 2xl:text-[20px] font-medium"
                          : ""
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length || 4}
                  className="text-center text-gray-400 p-4"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MaintenanceTable;
