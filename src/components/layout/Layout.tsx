import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router";
import { Outlet } from "react-router";
import { Header, Footer} from '@components'

export const Layout: FC = () => {
  const navigate = useNavigate();
  const isAuthorized = !!localStorage.getItem('token')
  useEffect(() => {
    if (!isAuthorized) {
      navigate('/login');
    }
  }, []);
  return (
    <>
      <Header />
      <Outlet/>
      <Footer/>
    </> 
  );
};