import Link from "next/link";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

// import svg from vectors
import svgFile from "../../public/vectors/NewEmail.svg";
import { useSelector } from "react-redux";
import { Spinner } from "../../components/Lib";

const OTPInput = dynamic(() => import("otp-input-react"), { ssr: false });
const ResendOTP = dynamic(() => import("otp-input-react").then((mod) => mod.ResendOTP), { ssr: false });

export default function VerifyEmail() {
  const { user } = useSelector((state) => state.auth);

  const [loading, setLoading] = React.useState(false);
  const [OTP, setOTP] = React.useState("");
  const [disabled, setDisabled] = React.useState(true);
  const [error, setError] = React.useState(null);

  const sendEmailVerificationCode = async () => {
    console.log("sendEmailVerificationCode");
  };

  const handleOTPChange = (value) => {
    value.length === 6 ? setDisabled(false) : setDisabled(true);
    setOTP(value);
  };
  let hideEmail = function (email) {
    return email.replace(/(.{4})(.*)(?=@)/, function (gp1, gp2, gp3) {
      for (let i = 0; i < gp3.length; i++) {
        gp2 += "*";
      }
      return gp2;
    });
  };
  const renderButton = (buttonProps) => {
    return (
      <button {...buttonProps}>
        {buttonProps.remainingTime !== 0 ? `OTP will expire in ${buttonProps.remainingTime} secs.` : `Didn't get the mail? try again`}
      </button>
    );
  };

  const renderTime = () => React.Fragment;

  const onSubmit = () => {
    const token = window.localStorage.getItem("__auth_provider_token__");

    axiosClient
      .post(
        "/verify-email",
        {
          passcode: OTP,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          if (user?.user?.role == 2) {
            window.location.href = "/onboarding/customer/fill-your-kyc";
          }
          if (user?.user[0]?.role_id == 3) {
            window.location.href = "/onboarding/merchant/fill-your-kyc";
          }
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };
  return (
    <div className='flex items-center justify-center h-screen py-2'>
      <div className='hidden md:block md:w-2/4 h-screen bg-auth-pattern bg-cover'></div>
      <div className='w-full md:w-7/12'>
        <div className='h-[100vh] flex flex-col justify-center items-center'>
          <div className='w-[130px] h-[65px] mb-2 '>
            <Image src={svgFile} alt='verify email' />
          </div>
          <div className='w-full py-[30px] sm:py-[40px] bg-[#FAFAFA] sm:bg-white flex flex-col justify-center items-center '>
            <div className='w-[430px] flex flex-col items-center justify-center'>
              <h3 className='text-[18px] text-[#282828] font-semibold'>Email Verification</h3>
              <p className='text-[12px] text-[#6E6B6B] mt-[10px] w-full'>
                Hello {user?.firstName}, a confirmation mail has been sent to {user?.email}
              </p>
              <p className='text-[12px] text-[#6E6B6B] mt-[10px]'>Kindly enter the 6 digit pin provided in your mail</p>
              <div className='w-[430px] mt-10 flex justify-center '>
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
                  className='w-full h-10 flex gap-2 xs:!gap-6 justify-between items-center my-3 mb-8 takke-otp-input__container'
                  inputClassName='w-full h-full bg-[#f4f4f4] border-0 takke-otp-input'
                />
              </div>
              <div className='mb-4'>
                <a
                  onClick={onSubmit}
                  disabled={disabled}
                  className={`w-full flex items-center justify-center mr-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-bizpotta-purple hover:bg-bizpotta-hover hover:text-bizpotta-purple cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-takke-green ${
                    loading && "opacity-50 cursor-not-allowed"
                  }`}
                >
                  <span className='mr-3'>Continue</span>
                  {loading ? <Spinner /> : null}
                </a>
              </div>
              <div className='mb-4'>
                <span className='text-[12px] text-[#999999] mb-[10px]'>
                  <ResendOTP renderButton={renderButton} renderTime={renderTime} onResendClick={sendEmailVerificationCode} />
                </span>
              </div>
              {error && <div className=' text-red-500 mt-4'>{error}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
