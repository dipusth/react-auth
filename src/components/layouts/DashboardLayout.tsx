import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Common/sidebar/Sidebar";
import { useEffect } from "react";
import DashboardHeader from "../Common/DashboardHeader";
import { DaasboardWraper } from "../Common/Style";
import styled from "styled-components";
import type { stateProps } from "@/types/PostType";

const DashboardLayout = ({
  selectedProducts,
  setSelectedProducts,
}: stateProps) => {
  const location = useLocation();
  console.log("location", location);
  console.log("selectedProducts in dashboard layout", selectedProducts);
  useEffect(() => {
    console.log("Path changed:", location.pathname);
  }, [location]);
  const DashboardBodyWrapper = styled.div`
    height: calc(100vh - 85px);
  `;
  return (
    <DaasboardWraper>
      <DashboardHeader
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
      <DashboardBodyWrapper className="dark:text-white flex wrapper">
        <Sidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </DashboardBodyWrapper>
    </DaasboardWraper>
  );
};

export default DashboardLayout;
