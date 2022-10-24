import React, { useEffect, useState } from "react";
import BlueFooter from "../../BlueFooter";
import Header from "../../CreatorHeader";
import Sidebar from "./Sidebar";
import XSidebar from "./XSidebar";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { FullPageSpinner } from "../../Lib";
import { useRouter } from "next/router";
import PlainFooter from "../../PlainFooter";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [slideIn, setSlideIn] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (user && user?.is_onboarded) {
      if (user?.roles_id != 3 && user?.roles_id != 4) {
        router.push("/auth/login");
      }
      setLoading(false);
    }
    if (user && !user?.is_onboarded) router.push("/onboarding");
    if (!user) router.push("/auth/login");
  }, [router, user]);

  if (loading) return <FullPageSpinner />;

  return (
    <div className='relative overflow-hidden'>
      <Header show={show} setShow={setShow} slideIn={slideIn} setSlideIn={setSlideIn} />
      <motion.div className='w-full' initial={{ opacity: 0, x: "-20%" }} animate={{ opacity: 1, x: 0 }} transition={{ ease: "easeOut", duration: 1 }}>
        {children}
      </motion.div>
      <PlainFooter/>
      <Sidebar />
      <XSidebar show={show} setShow={setShow} slideIn={slideIn} setSlideIn={setSlideIn} />
    </div>
  );
};

export default Layout;
