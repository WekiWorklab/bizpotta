import React, { useState } from "react";
import Content from "../../../../components/CoursePage-Components/Content";
import NoContent from "../../../../components/CoursePage-Components/NoContent";
import Layout from "../../../../components/Layout-Components/Layout";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const enrolled = true;

  return (
    <Layout>
      {enrolled === true ? <Content /> : <NoContent />}
      {/* <Content /> */}
    </Layout>
  );
};

export default index;
