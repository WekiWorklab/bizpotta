import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Onboard from "../../components/Onboard";
import { FullPageSpinner } from "../../components/Lib";

const Index = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  const { user } = useSelector((state) => state.auth);

  React.useEffect(() => {
    if (!user) {
      router.push("/auth/login");
    }
    setLoading(false);
  }, [router, user]);

  if (loading) return <FullPageSpinner />;

  return <Onboard />;
};

export default Index;
