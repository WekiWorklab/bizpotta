import React from "react";

const regpage = () => {
  return (
    <div>
      <div className="px-2 py-4 ">
        <img
          src="./images/logo.png"
          className="w-[200px] h-[40px] mx-auto md:mx-0"
        />
      </div>

      <div className='flex justify-center'>
        <div
          className="w-[40%] xl:w-[60%] hidden md:block lg:h-screen"
          style={{ backgroundImage: "url(./images/eventimgg.jpg)", borderBottomLeftRadius: "200px",  borderBottomRightRadius: "200px", borderTopLeftRadius: "", borderTopRightRadius: "600px"}}
        />
      </div>
    </div>
  );
};

export default regpage;
