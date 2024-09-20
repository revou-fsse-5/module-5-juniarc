import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import AppHeader from "../app/AppHeader";
import { getAllCategory } from "@/states/allCategory/action";
import { getUserWithSession } from "@/states/user/action";
import { useAppDispatch, useAppSelector } from "@/states/hooks";
import { getChartFromStorage } from "@/states/chart/action";

const AppFooter = dynamic(() => import('../app/AppFooter'), { ssr: false })

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const user = useAppSelector((states) => states.user);
  const accessToken = useAppSelector((states) => states.accessToken);
  const categories = useAppSelector((states) => states.categories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getChartFromStorage())
  },[dispatch])

  useEffect(() => {
    dispatch(getUserWithSession());
  }, [dispatch, accessToken]);
  return (
    <div>
      <AppHeader categories={categories} user={user} />
      <main>{children}</main>
      <AppFooter categories={categories} />
    </div>
  );
};

export default Layout;
