import React from "react";
import OldContent from "../../../../components/CreatorsComponents/CourseLandingComponent/OldContent";
import Layout from "../../../../components/CreatorsComponents/LayoutComponents/Layout";

const Index = ({ data }) => {
  return (
    <Layout>
      <OldContent data={data} />
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const base = process.env.NEXT_PUBLIC_REACT_APP_API_URL;
  const res = await fetch(`${base}/onboardData`);
  const result = await res.json();
  const { data } = result;
  return {
    props: {
      data,
    },
  };
}
