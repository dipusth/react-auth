import Logo from "@/assets/shoplogo2.png";
import Notification from "../ui/icon/Notification";
import {
  deleteActiveUser,
  getActiveUser,
  type IuserType,
} from "@/LocalStorage";
import { useNavigate } from "react-router-dom";
import Profile from "@/assets/images/profile.jpg";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import User from "../ui/icon/User";
const DashboardHeader = () => {
  const [activeUser, setActiveUser] = useState<IuserType>();
  const navigate = useNavigate();
  const handleLogOut = () => {
    deleteActiveUser();
    navigate("/login");
  };

  useEffect(() => {
    const data = getActiveUser();
    if (data == null) {
      navigate("/login");
    }
    setActiveUser(data);
  }, [navigate]);
  return (
    <div className="flex justify-between px-5 header-dashboard py-2">
      <div className="logo">
        <img src={Logo} alt="Online Shopping" />
      </div>
      <div className="header-right flex items-center">
        <div className="notification mr-5">
          <Notification />
        </div>
        <div className="user-profile flex items-center mr-2">
          <span className="circle circle-sm border-4 border-slate-200 mr-2">
            <img src={Profile} alt="User" />
            {/* <User /> */}
          </span>
          <div className="mr-3 flex flex-col">
            <h4> {activeUser?.name}</h4>
            <small className="text-slate-400">Standard Plan</small>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="p-2 cursor-pointer">
              <span className="angle-down"></span>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56"
              align="start"
              side="left"
              sideOffset={8}
            >
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleLogOut}
                  className="cursor-pointer"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
