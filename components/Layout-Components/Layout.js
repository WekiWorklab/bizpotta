import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BlueFooter from "../BlueFooter";
import { useRouter } from "next/router";
//////
import Header from "../Header";
import Sidebar from "../Sidebar";
import XSidebar from "../XSidebar";

const Layout = ({ children }) => {
  const router = useRouter();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login");
    } else {
      setLoading(false);
    }
    return () => {
      setLoading(false);
    };
  }, [isAuthenticated, router]);

  if (loading) return null;

  return (
    <div className='relative overflow-hidden'>
      <Header show={show} setShow={setShow} slideIn={slideIn} setSlideIn={setSlideIn} />
      {children}
      <BlueFooter />
      <Sidebar />
      {/* {show ? <XSidebar  show = {show} setShow = {setShow} slideIn = {slideIn} setSlideIn={setSlideIn} /> : null} * Sidebar with toggle functionality */}
      <XSidebar show={show} setShow={setShow} slideIn={slideIn} setSlideIn={setSlideIn} />
    </div>
  );
};

export default Layout;
