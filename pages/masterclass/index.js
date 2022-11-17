import React, { useState } from "react";
import { HomeSideBar } from "..";
import BottomSection from "../../components/Masterclass-Components/Main-Components/BottomSection";
import MiddleSection from "../../components/Masterclass-Components/Main-Components/MiddleSection";
import TopSection from "../../components/Masterclass-Components/Main-Components/TopSection";

const Index = () => {
  const [show, setShow] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  return (
    <div className="w-full relative">
      <HomeSideBar
        show={show}
        setShow={setShow}
        slideIn={slideIn}
        setSlideIn={setSlideIn}
      />
      <TopSection
        show={show}
        setShow={setShow}
        slideIn={slideIn}
        setSlideIn={setSlideIn}
      />
      <MiddleSection />
      <BottomSection />
    </div>
  );
};

export default Index;
