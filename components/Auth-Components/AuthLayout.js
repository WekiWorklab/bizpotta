import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { reset, setUser } from "../../store/authSlice";
import { FullPageSpinner } from "../Lib";

export default function AuthLayout({ children }) {
  const router = useRouter();
  const { isAuthenticated, isError, isRegistered, message, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (user) {
      if (user?.is_onboarded) {
        switch (user?.roles_id) {
          case 1:
            router.push("/admin");
            break;
          case 2:
            router.push("/students");
            break;
          default:
            router.push("/creator");
            break;
        }
      } else {
        router.push("/onboarding");
      }
    }
    if (!user) {
      setLoading(false);
    }

    if (isRegistered) {
      toast.success("Registration successful");
      dispatch(reset());
      dispatch(setUser());
      router.push("/auth/verify-email");
    }
    dispatch(reset());
  }, [isError, isRegistered, message, dispatch, router, isAuthenticated, user?.is_onboarded, user?.roles_id, user]);

  if (loading) return <FullPageSpinner />;

  return (
    <div className='flex items-center justify-center h-screen py-2 '>
      <div className='hidden md:block md:w-2/4 h-screen bg-auth-pattern bg-cover'></div>
      <div className='w-full md:w-7/12'>{children}</div>
    </div>
  );
}
