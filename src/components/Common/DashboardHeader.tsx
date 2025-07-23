import Logo from "@/assets/shoplogo2.png";
import Notification from "../ui/icon/Notification";
import {
  deleteActiveUser,
  getActiveUser,
  type IuserType,
} from "@/LocalStorage";
import { useNavigate } from "react-router-dom";
import Profile from "@/assets/images/profile.jpg";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import CartIcon from "../ui/icon/CartIcon";
import { NavLink } from "react-router-dom";
import type { stateProps } from "@/types/PostType";
const DashboardHeader = ({
  selectedProducts,
  setSelectedProducts,
}: stateProps) => {
  const [activeUser, setActiveUser] = useState<IuserType>();
  const navigate = useNavigate();
  const handleLogOut = () => {
    deleteActiveUser();
    navigate("/login");
  };
  console.log("selectedProducts in dashboard header", selectedProducts);
  useEffect(() => {
    const data = getActiveUser();
    if (data == null) {
      navigate("/login");
    }
    setActiveUser(data);
  }, [navigate]);
  return (
    <div className="flex justify-between px-5 header-dashboard py-2">
      <NavLink to={"/"} className="logo">
        <img src={Logo} alt="Online Shopping" />
      </NavLink>
      <div className="header-right flex gap-8 justify-between items-center">
        <NavLink className="cart notification" to="/dashboard/cart">
          <CartIcon className="text-slate-400" />
          <span className="badge rounded-full bg-red-600">4</span>
        </NavLink>
        <NavLink className="cart notification" to="/notification">
          <Notification className="text-slate-400" />
          <span className="badge rounded-full bg-red-600">10</span>
        </NavLink>
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
