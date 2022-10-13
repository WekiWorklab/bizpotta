import React, { useState } from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout-Components/Layout";
import Sidebar from "../../components/Sidebar";
import XSidebar from "../../components/XSidebar";
import Content from "../../components/Content";
import NoContent from "../../components/Content-Components/NoContent";
import { useSelector } from "react-redux";
import { FullPageSpinner } from "../../components/Lib";

const StudentDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  const content = true;

  return <Layout>{content ? <Content /> : <NoContent />}</Layout>;
};

export default StudentDashboard;
