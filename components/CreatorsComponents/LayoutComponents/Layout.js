import React, { useState } from "react";
import BlueFooter from "../../BlueFooter";
import Header from "../../CreatorHeader";
import Sidebar from "./Sidebar";
import XSidebar from "./XSidebar";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  const [show, setShow] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  return (
    <div className='relative overflow-hidden'>
      <Header show={show} setShow={setShow} slideIn={slideIn} setSlideIn={setSlideIn} />
      <motion.div className='w-full' initial={{ opacity: 0, x: "-20%" }} animate={{ opacity: 1, x: 0 }} transition={{ ease: "easeOut", duration: 1 }}>
        {children}
      </motion.div>
      <Sidebar />
      <XSidebar show={show} setShow={setShow} slideIn={slideIn} setSlideIn={setSlideIn} />
    </div>
  );
};

export default Layout;
