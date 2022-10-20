import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Celebration } from "../../../../public";

const WithdrawalModal = ({ showWithdrawModal, setShowWithdrawModal, amount, setAmount }) => {

    const [section, setSection] = useState("acc_amount");
    const router = useRouter()
        
    const closeModal = () => {
        setAmount(null)
        setSection("acc_amount")
      setShowWithdrawModal(false);
    };
  
    return (
      <Transition.Root show={showWithdrawModal} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-10 inset-0 overflow-y-auto"
          open={showWithdrawModal}
          onClose={() => {}}
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center block sm:p-0  ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
  
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-top mt-10  bg-white rounded-lg overflow-hidden shadow-xl transform transition-all">
                <div className="w-[340px] sm:w-[400px] md:w-[400px] min-h-[400px] flex flex-col px-2 sm:px-4 py-6 items-center justify-start">
                  <div className="w-full flex justify-end  ">
                    <MdOutlineCancel
                      className="cursor-pointer"
                      color="#191919"
                      size={22}
                      onClick={closeModal}
                    />
                  </div>
                  <div className="flex w-full flex-col px-2 sm:px-6 mt-4 gap-y-6 items-center justify-center">
                    {section === "acc_amount" && (
                      <div className="flex flex-col items-center">
                        <p className="text-[#3B3B3B] mt-10">
                          How much would you like to withdraw?
                        </p>
                        <input type="number" value={amount} className="inputField w-full sm:w-[340px] break-words text-[14px] mt-8" onChange={(e) => setAmount(e.target.value)}
                        />
                        <button className="w-[120px] h-[35px] centerFlex rounded-md bg-darkBlue text-white text-[13px] dropdown-shadow cursor-pointer mt-12" onClick={() => {setSection("acc_details");}} >
                          Continue
                        </button>
                        <p
                          className="text-[13px] text-[#3B3B3B] mt-6 underline cursor-pointer"
                          onClick={() => {setAmount(null); closeModal();}}
                        >
                          No, Cancel
                        </p>
                      </div>
                    )}

                    {section === "acc_details" && (
                      <div className="flex flex-col items-center">
                        <p className="text-[#3B3B3B]">
                            Name
                        </p>
                        <div className="inputField centerFlex h-[50px] break-words w-[300px] sm:w-[340px] text-[14px] mt-2"> 
                            Mark Andrews
                        </div>
                        <p className="text-[#3B3B3B] mt-4">
                            Bank Name
                        </p>
                        <div className="inputField centerFlex h-[50px] break-words w-[300px] sm:w-[340px] text-[14px] mt-2"> 
                            Union Bank
                        </div>
                        <p className="text-[#3B3B3B] mt-4">
                            Account Number
                        </p>
                        <div className="inputField centerFlex h-[50px] break-words w-[300px] sm:w-[340px] text-[14px] mt-2"> 
                            0039430249
                        </div>
                        <button className="w-[120px] h-[35px] centerFlex rounded-md bg-darkBlue text-white text-[13px] dropdown-shadow cursor-pointer mt-6" onClick={() => {setSection("acc_success");}} >
                          Yes, go ahead
                        </button>
                        <p
                          className="text-[13px] text-[#3B3B3B] mt-6 underline cursor-pointer"
                          onClick={() => {setAmount(null); closeModal(); router.push("/creators/settings")}}
                        >
                          Change bank
                        </p>
                      </div>
                    )}

                    {section === "acc_success" && (
                      <div className="flex flex-col items-center gap-y-9 py-10">
                            <Celebration />

                            <p className="text-[17px]">Successful</p>

                            <p className="text-[13px]">Dear Ahmed, you account 0096******would be credited shortly</p>
                      </div>
                    )}

                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    );
  };

  export default WithdrawalModal