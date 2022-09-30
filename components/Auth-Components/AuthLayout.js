import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { reset } from "../../store/authSlice";

export default function AuthLayout({ children }) {
  const router = useRouter();
  const { isAuthenticated, isError, isSuccess, message, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (user.is_onboarded) {
      switch (user.roles_id) {
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
    }
    if (isSuccess || isAuthenticated) {
      router.push("/onboarding");
    }
    dispatch(reset());
  }, [isError, isSuccess, message, dispatch, router, isAuthenticated]);
  return (
    <div className='flex items-center justify-center h-screen py-2 '>
      <div className='hidden md:block md:w-2/4 h-screen bg-auth-pattern bg-cover'></div>
      <div className='w-full md:w-7/12'>{children}</div>
    </div>
  );
}
