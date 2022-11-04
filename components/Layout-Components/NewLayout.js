import React, { useState } from "react";
import BlueFooter from "../BlueFooter";

//////
import Header from "../Header";
import NewSidebar from "../NewSidebar";
import NewXSidebar from "../NewXSidebar";
import XSidebar from "../XSidebar";

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useCourse from "../../hooks/useCourse";
import { FullPageSpinner } from "../Lib";

const NewLayout = ({ children }) => {
  const [show, setShow] = useState(false);
  const [slideIn, setSlideIn] = useState(false);
  const { getMyCourse } = useCourse();

  const [courseId, setCourseId] = useState();
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  // router.id, router.weekId

  useEffect(() => {
    const course_id = router.query.id;
    course_id
      ? getMyCourse(course_id)
          .then((res) => {
            setCourseId(res?.course_id);
            setLoading(false);
          })
          .catch((err) => {
            router.push("/students");
          })
      : null;
    return () => {
      setCourseId(null);
    };
  }, [router]);

  if (loading) return <FullPageSpinner />;

  return (
    <div className="relative overflow-hidden">
      <Header
        show={show}
        setShow={setShow}
        slideIn={slideIn}
        setSlideIn={setSlideIn}
      />
      <motion.div
        className="w-full"
        initial={{ opacity: 0, x: "20%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        {children}
      </motion.div>
      <NewSidebar courseId={courseId} />
      <NewXSidebar
        show={show}
        setShow={setShow}
        slideIn={slideIn}
        setSlideIn={setSlideIn}
        courseId={courseId}
      />
    </div>
  );
};

export default NewLayout;
