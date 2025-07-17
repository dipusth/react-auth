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
    <div className="dark:text-white flex h-full p-5">
      <div>
        <h1 className="text-4xl font-bold"> Welcome {activeser?.name}</h1>
        <p>This is Dashboard page</p>
        <button className="inline-block w-40" onClick={handleLogOut}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
