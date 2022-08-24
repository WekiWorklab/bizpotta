import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export const useRequireAuth = () => {
  const router = useRouter();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user === false || user == null) {
      router.push("/auth/login");
    }
  }, [user, router]);

  return user;
};

export const useIsAuthStudent = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/students");
    }
  }, [user, router]);

  return null;
};
