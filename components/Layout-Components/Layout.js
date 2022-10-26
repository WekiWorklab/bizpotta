import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BlueFooter from "../BlueFooter";
import { useRouter } from "next/router";
//////
import Header from "../Header";
import Sidebar from "../Sidebar";
import XSidebar from "../XSidebar";

import CourseDetailsModal from "../CourseDetailsModal";
import { FullPageSpinner } from "../Lib";

import { motion } from "framer-motion";

const Layout = ({ children }) => {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    if (user && user?.is_onboarded) {
      if (user?.roles_id == 3 || user?.roles_id == 4) {
        router.push("/creators");
      }

      setLoading(false);
    }
    if (!user) router.push("/auth/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, user?.is_onboarded, user?.roles_id]);

  if (loading) return <FullPageSpinner />;

  return (
    <div className='relative overflow-hidden'>
      <Header show={show} setShow={setShow} slideIn={slideIn} setSlideIn={setSlideIn} />
      <motion.div className='w-full' initial={{ opacity: 0, x: "20%" }} animate={{ opacity: 1, x: 0 }} transition={{ ease: "easeOut", duration: 1 }}>
        {children}
      </motion.div>
      <Sidebar />
      <XSidebar show={show} setShow={setShow} slideIn={slideIn} setSlideIn={setSlideIn} />
      {typeof window !== "undefined" && <CourseDetailsModal />}
    </div>
  );
};
    
export default Layout;

{
  /* {show ? <XSidebar  show = {show} setShow = {setShow} slideIn = {slideIn} setSlideIn={setSlideIn} /> : null} * Sidebar with toggle functionality */
}
