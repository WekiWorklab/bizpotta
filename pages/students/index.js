import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout-Components/Layout";
import Content from "../../components/Content";
import NoContent from "../../components/Content-Components/NoContent";
import { useDispatch, useSelector } from "react-redux";
import studentService from "../../services/StudentService";
import { useQuery } from "@tanstack/react-query";
import { setUser } from "../../store/authSlice";

const StudentDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser());

    return () => {
      dispatch(setUser());
    };
  }, [dispatch]);

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

  const { data: recommended, loading: r_loading } = useQuery(["recommended"], getRecommendedCourses, { staleTime: 60 * 1000 * 10, retry: 2 });
  const { data: popular, loading: p_loading } = useQuery(["popular"], getPopularCourses, { staleTime: 60 * 1000 * 10, retry: 2 });
  const { data: featured, loading: f_loading } = useQuery(["featured"], getFeaturedCourse, { staleTime: 60 * 1000 * 10, retry: 2 });

  return (
    <Layout>
      {user?.has_purchased_course ? (
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
