import { useQuery } from "@tanstack/react-query";
import React from "react";
import Layout from "../../../../components/Layout-Components/Layout";
import Content from "../../../../components/Masterclass-Components/Content";
import NoContent from "../../../../components/Masterclass-Components/NoContent";
import useCourse from "../../../../hooks/useCourse";

const Index = () => {
  const enrolled = true;
  const { getLiveSessions } = useCourse();

  const { data: live, isLoading: l_loading } = useQuery(
    ["getLiveSessions"],
    () => getLiveSessions(),
    {
      onSuccess: (data) => {
        // console.log(data);
      },
    }
  );

  return (
    <Layout>
      {enrolled ? (
        <Content
          dataObj={{
            liveSessions: live?.liveSessions,
            l_loading: l_loading,
          }}
        />
      ) : (
        <NoContent
          dataObj={{
            liveSessions: live?.liveSessions,
            l_loading: l_loading,
          }}
        />
      )}
    </Layout>
  );
};

export default Index;
