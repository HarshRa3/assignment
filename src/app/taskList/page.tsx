import DashboardTable from "@/components/dashboard/dashboardTable/DashboardTable";
import AddTaskModal from "@/components/taskList/addTaskModal/AddTaskModal";
import TaskListbtn from "@/components/taskList/TaskListBtn/TaskListbtn";
import TaskTable from "@/components/taskList/taskTable/TaskTable";
import { taskTableColumn, TaskTableData } from "@/staticData/staticData";
import React from "react";

const page: React.FC = () => {

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl mb-4 font-bold  ">Task list</h1>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <AddTaskModal/>
          <TaskListbtn color="red" title="Delete selected" />
        </div>
        <TaskTable/>
      </div>
    </div>
  );
};

export default page;
