import React from "react";
import NewContent from "../../../components/CreatorsComponents/CourseLandingComponent/NewContent";
import NewMentorContent from "../../../components/CreatorsComponents/CourseLandingComponent/NewMentorContent";
import Layout from "../../../components/CreatorsComponents/LayoutComponents/Layout";

const Index = () => {
  const mentor = false;

  return <Layout>{mentor ? <NewMentorContent /> : <NewContent />}</Layout>;

  //New Content is the tutor section for first time tutors
  //NewMentorContent is the mentor section for first time mentors
};

export default Index;
