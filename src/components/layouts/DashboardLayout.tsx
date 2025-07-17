import { Outlet } from "react-router-dom";
import Sidebar from "../Common/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="dark:text-white flex h-full">
      <Sidebar />

      <Outlet />
      {/* <button className="inline-block w-40" onClick={handleLogOut}>
        Logout
      </button> */}
    </div>
  );
};

export default DashboardLayout;
