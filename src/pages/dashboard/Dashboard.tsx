import Sidebar from "@/components/Common/Sidebar";
import {
  deleteActiveUser,
  getActiveUser,
  type IuserType,
} from "@/LocalStorage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [activeser, setActiveUser] = useState<IuserType>();
  const navigate = useNavigate();
  useEffect(() => {
    const data = getActiveUser();
    console.log("data on dashboard page", data);
    if (data == null) {
      navigate("/login");
    }
    setActiveUser(data);
  }, [navigate]);

  const handleLogOut = () => {
    deleteActiveUser();
    navigate("/login");
  };
  return (
    <div className="dark:text-white flex h-full">
      <Sidebar />
      <div>Welcome {activeser?.name}</div>
      <h1>This is Dashboard page</h1>
      <button className="inline-block w-40" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
