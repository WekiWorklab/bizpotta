import React from "react";
// import NewContent from "../../../components/CreatorsComponents/CourseLandingComponent/NewContent";
import OldContent from "../../../components/CreatorsComponents/CourseLandingComponent/OldContent";
import Layout from "../../../components/CreatorsComponents/LayoutComponents/Layout";

const index = () => {
  // const newCreator = false;
  return <Layout> <OldContent /> </Layout>;


  // return <Layout>{!newCreator ? <OldContent /> : <NewContent />}</Layout>;
};

export default index;
