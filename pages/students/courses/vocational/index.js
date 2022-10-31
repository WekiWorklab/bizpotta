import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Content from "../../../../components/CoursePage-Components/Content";
import NoContent from "../../../../components/CoursePage-Components/NoContent";
import Layout from "../../../../components/Layout-Components/Layout";
import studentService from "../../../../services/StudentService";

const Index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  // const getCourses = async () => {
  //   const res = await studentService.getCourses();
  //   return res?.data;
  // };

  // const { data, loading } = useQuery(["all-courses"], getCourses);

  const getRecommendedCourses = async () => {
    const res = await studentService.getRecommended();
    console.log(res.data);
    return res?.data;
  };

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



  const enrolled = true;

  return (
    <Layout>
      {enrolled === true ? (
        <Content dataObj={{
          recommended: recommended,
          popular: popular,
          featured: featured,
          r_loading: r_loading,
          p_loading: p_loading,
          f_loading: f_loading,
        }}  />
      ) : (
        <NoContent dataObj={{
          recommended: recommended,
          popular: popular,
          featured: featured,
          r_loading: r_loading,
          p_loading: p_loading,
          f_loading: f_loading,
        }} />
      )}
    </Layout>
  );
};

export default Index;
