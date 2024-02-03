import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AuthSvgOne, AuthSvgThree, AuthSvgTwo } from "../../public";
import { reset, setUser } from "../../store/authSlice";
import { FullPageSpinner } from "../Lib";

export default function AuthLayout({ children }) {
  const router = useRouter();
  const { isAuthenticated, isError, isRegistered, message, user } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (isError) {
      toast.error(message);
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

    if (user) {
      if (user.email_verified_at === null) {
        setTimeout(() => {
          if (router.pathname !== "/auth/verify-email") {
            router.push("/auth/verify-email");
          }
        }, 1000);
      } else {
        if (user?.is_onboarded) {
          switch (user?.roles_id) {
            case 1:
              router.push("/admin");
              break;
            case 2:
              router.push("/students");
              break;
            default:
              router.push("/creators");
              break;
          }
        } else {
          router.push("/onboarding");
        }
      }
    }

    dispatch(reset());
  }, [
    isError,
    isRegistered,
    message,
    dispatch,
    router,
    isAuthenticated,
    user?.is_onboarded,
    user?.roles_id,
    user,
  ]);

  if (loading) return <FullPageSpinner />;

  return (
    <div className='flex items-center justify-center h-screen py-2 '>
      {/* <div className="hidden md:block md:w-2/4 h-screen bg-auth-pattern bg-cover "></div> */}
      <div className='hidden md:w-2/4 h-screen md:flex flex-col items-center justify-center gap-y-10 bg-darkBlue  px-4 lg:px-20 '>
        <div className='flex items-center gap-x-7'>
          <AuthSvgOne />
          <div className='text-white flex flex-col gap-y-2'>
            <p className='font-bold'>Learn in-demand skills on the go </p>
            <p className='text-[13px]'>
              Expand your earning potential with skills that will give you a
              place in the digital economy.
            </p>
          </div>
        </div>

        <div className='flex items-center gap-x-7'>
          <AuthSvgTwo />
          <div className='text-white flex flex-col gap-y-2'>
            <p className='font-bold'>Get access to best in industries </p>
            <p className='text-[13px]'>
              Connect with mentors who have proven results and competencies in
              their various sectors.
            </p>
          </div>
        </div>

        <div className='flex items-center gap-x-7'>
          <AuthSvgThree />
          <div className='text-white flex flex-col gap-y-2'>
            <p className='font-bold'>
              Learn business development and management{" "}
            </p>
            <p className='text-[13px]'>
              Understand what it takes to develop and grow your business
              profitably with the right resources and tools
            </p>
          </div>
        </div>
      </div>
      <div className='w-full  md:w-7/12'>{children}</div>
    </div>
  );
}
