import React, { useState } from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout-Components/Layout";
import Sidebar from "../../components/Sidebar";
import XSidebar from "../../components/XSidebar";
import Content from "../../components/Content";
import NoContent from "../../components/Content-Components/NoContent";
import { useSelector } from "react-redux";
import { FullPageSpinner } from "../../components/Lib";
import studentService from "../../services/StudentService";
import { QueryClient, useQuery } from "@tanstack/react-query";

const StudentDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  const getRecommendedCourses = async () => {
    const res = await studentService.getRecommended();
    console.log(res.data);
    return res?.data;
  };

  getRecommendedCourses();

  const getPopularCourses = async () => {
    const res = await studentService.getPopular();
    return res?.data;
  };

  const getFeaturedCourse = async () => {
    const res = await studentService.getFeatured();
    return res?.data;
  };

  const { data: recommended, loading: r_loading } = useQuery(
    ["recommended"],
    getRecommendedCourses,
    { staleTime: 60 * 1000 * 10, retry: 2 }
  );
  const { data: popular, loading: p_loading } = useQuery(
    ["popular"],
    getPopularCourses,
    { staleTime: 60 * 1000 * 10, retry: 2 }
  );
  const { data: featured, loading: f_loading } = useQuery(
    ["featured"],
    getFeaturedCourse,
    { staleTime: 60 * 1000 * 10, retry: 2 }
  );

  const content = true;
  // user?.has_purchased_course
  return (
    <Layout>
      {content ? (
        <Content
          dataObj={{
            recommended: recommended,
            popular: popular,
            featured: featured,
            r_loading: r_loading,
            p_loading: p_loading,
            f_loading: f_loading,
          }}
        />
      ) : (
        <NoContent
          dataObj={{
            recommended: recommended,
            popular: popular,
            featured: featured,
            r_loading: r_loading,
            p_loading: p_loading,
            f_loading: f_loading,
          }}
        />
      )}
    </Layout>
  );
};

export default StudentDashboard;
