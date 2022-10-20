import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Onboard from "../../components/Onboard";
import { FullPageSpinner } from "../../components/Lib";

const Index = ({ data }) => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  const { user } = useSelector((state) => state.auth);

  React.useEffect(() => {
    if (!user) {
      router.push("/auth/login");
    } else {
      if (user?.email_verified_at === null) {
        router.push("/auth/verify-email");
      }
    }
    if (user?.email_verified_at !== null) {
      if (user?.onboarded === 1) {
        router.push("/auth/login");
      }
    }
    setLoading(false);
  }, [router, user]);

  if (loading) return <FullPageSpinner />;

  return <Onboard data={data} />;
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
