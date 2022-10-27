import React, { useEffect } from "react";
import OldContent from "../../../../components/CreatorsComponents/CourseLandingComponent/OldContent";
import Layout from "../../../../components/CreatorsComponents/LayoutComponents/Layout";

const Index = ({ data }) => {
  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);
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
