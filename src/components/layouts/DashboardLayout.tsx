import { Outlet } from "react-router-dom";
import Sidebar from "../Common/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="dark:text-white flex h-full wrapper">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
