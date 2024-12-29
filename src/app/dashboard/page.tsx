import DashboardTable from "@/components/dashboard/dashboardTable/DashboardTable";
import Summary from "@/components/dashboard/summary/Summary";
import { TableData, tableHeader } from "@/staticData/staticData";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-6" >
      <h1 className="text-4xl font-bold  ">Dashboard</h1>
      <Summary title={'Summary'} />
      <Summary title={'Pending task summaray'} />
      <div className="w-[650px] overflow-x-auto" >

      <DashboardTable tableData={TableData} tableHeader={tableHeader} />
      </div>
    </div>
  );
};

export default Dashboard;
