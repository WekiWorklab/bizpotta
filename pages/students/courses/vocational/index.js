import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Content from "../../../../components/CoursePage-Components/Content";
import NoContent from "../../../../components/CoursePage-Components/NoContent";
import Layout from "../../../../components/Layout-Components/Layout";
import studentService from "../../../../services/StudentService";

const Index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const getCourses = async () => {
    const res = await studentService.getCourses();
    return res?.data;
  };

  const { data, loading } = useQuery(["all-courses"], getCourses);
  console.log(data);

  const enrolled = false;

  return (
    <Layout>
      {enrolled === true ? <Content data = {data} /> : <NoContent data = {data} />}
      {/* <Content /> */}
    </Layout>
  );
};

export default Index;
