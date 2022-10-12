import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Onboard from "../../components/Onboard";

const Index = () => {
  const router = useRouter();

  const { user } = useSelector((state) => state.auth);

  React.useEffect(() => {
    if (!user) {
      router.push("/auth/login");
    }
  }, [router, user]);
  return <Onboard />;
};

export default Index;
