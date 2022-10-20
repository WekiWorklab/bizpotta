import Image from "next/image";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { sendVerificationCode, setUser, verifyEmail, reset } from "../../store/authSlice";

// import svg from vectors
import svgFile from "../../public/vectors/NewEmail.svg";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../../components/Lib";
import { toast } from "react-toastify";
import Head from "next/head";
import { useRouter } from "next/router";

const OTPInput = dynamic(() => import("otp-input-react"), { ssr: false });
const ResendOTP = dynamic(() => import("otp-input-react").then((mod) => mod.ResendOTP), { ssr: false });

export default function VerifyEmailPage() {
  const { user, isLoading, isError, message, isSuccess, isEmailVerified } = useSelector((state) => state.auth);
  const [OTP, setOTP] = React.useState("");
  const [disabled, setDisabled] = React.useState(true);
  const dispatch = useDispatch();
  const router = useRouter();
  // Functions
  const sendEmailVerificationCode = async () => {
    dispatch(sendVerificationCode());
    dispatch(reset());
  };

  const handleOTPChange = (value) => {
    value.length === 6 ? setDisabled(false) : setDisabled(true);
    setOTP(value);
  };

  let hideEmail = function (email) {
    return email?.replace(/(.{4})(.*)(?=@)/, function (gp1, gp2, gp3) {
      for (let i = 0; i < gp3.length; i++) {
        gp2 += "*";
      }
      return gp2;
    });
  };

  const renderButton = (buttonProps) => {
    return (
      <button {...buttonProps}>
        {buttonProps.remainingTime !== 0 ? `You can send another OTP in ${buttonProps.remainingTime} secs.` : `Didn't get the mail? try again`}
      </button>
    );
  };

  const renderTime = () => React.Fragment;
  const onSubmit = () => {
    dispatch(verifyEmail(OTP));
    dispatch(reset());
  };

  useEffect(() => {
    dispatch(setUser());
    dispatch(reset());
    dispatch(sendVerificationCode());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isError) {
      console.log("here");
      toast.error(message);
    }
    if (isSuccess) {
      toast.success(message);
    }
    if (isEmailVerified) {
      toast.success(message);
      dispatch(setUser());
      setTimeout(() => {
        router.push("/onboarding");
      }, 1000);
    }
  }, [isError, message, isSuccess, router, isEmailVerified, dispatch]);

  useEffect(() => {
    if (!user) {
      Router.push("/auth/login");
    }
    if (user?.email_verified_at !== null) {
      dispatch(setUser());
      window.location.href = "/onboarding";
    }
  }, [user, dispatch]);

  return (
    <div className='centerFlex h-screen py-2'>
      <Head>
        <title>Verify Email | Bizpotta</title>
      </Head>
      <div className='hidden md:block md:w-2/4 h-screen bg-auth-pattern bg-cover'></div>
      <div className='w-full md:w-7/12'>
        <div className='h-[100vh] flex flex-col justify-center items-center'>
          <div className='w-[130px] h-[65px] mb-2 '>
            <Image src={svgFile} alt='verify email' />
          </div>
          <div className='w-full py-[30px] sm:py-[40px] bg-[#FAFAFA] sm:bg-white flex flex-col justify-center items-center '>
            <div className='w-[430px] flex flex-col items-center justify-center'>
              <h3 className='text-[18px] text-[#282828] font-semibold'>Email Verification</h3>
              <p className='text-[12px] text-[#6E6B6B] mt-[10px] w-full text-center px-4 md:px-0'>
                Hello {user?.firstName}, a confirmation mail has been sent to {hideEmail(user?.email)}
              </p>
              <p className='text-[12px] text-[#6E6B6B] mt-[10px]'>Kindly enter the 6 digit pin provided in your mail</p>
              <div className='w-[380px] md:w-[430px] mt-10 flex justify-center items-center'>
                <OTPInput
                  value={OTP}
                  onChange={handleOTPChange}
                  OTPLength={6}
                  otpType='number'
                  disabled={false}
                  autoFocus={true}
                  placeholder={["-", "-", "-", "-", "-", "-"]}
                  style={{
                    width: "80%",
                  }}
                  inputStyles={{
                    width: 42,
                    height: 42,
                    borderRadius: 5,
                  }}
                  className='w-7/12 md:w-full h-10 flex gap-2 justify-center md:justify-between my-3 mb-8 takke-otp-input__container'
                  inputClassName='w-full h-full bg-[#f4f4f4] border-0 takke-otp-input'
                />
              </div>
              <div className='mb-4'>
                <a
                  onClick={onSubmit}
                  disabled={disabled}
                  className={`w-full flex items-center justify-center mr-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-bizpotta-purple hover:bg-bizpotta-hover hover:text-bizpotta-purple cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-takke-green ${
                    isLoading && "opacity-50 cursor-not-allowed"
                  }`}
                >
                  <span className='mr-3'>Continue</span>
                  {isLoading ? <Spinner /> : null}
                </a>
              </div>
              <div className='mb-4'>
                <span className='text-[12px] text-[#999999] mb-[10px]'>
                  <ResendOTP renderButton={renderButton} renderTime={renderTime} onResendClick={sendEmailVerificationCode} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
