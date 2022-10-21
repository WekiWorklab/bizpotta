import React from "react";

//////////
import { GoSettings } from "react-icons/go";
import { MdOutlineArrowUpward } from "react-icons/md";
import moment from "moment";
import { useRouter } from "next/router";
import { useState } from "react";
import { TableFooter, TableHeader } from "./Content";
import { NoActivities } from "../../../public";
import CreatorTable from "../../Tables/CreatorTable";

const PublishedCourses = () => {
  const router = useRouter();

  const data = [
    {
      item: 1,
      name: "Chibuike Umoh",
      price: "N12,000",
      course: "Introduction to fashion designing Introduction to fashion designing",
      subscription: "Monthly",
      student: 30,
      coupon: "10%",
      date: Date.now(),
      status: false,
      code: "0001KJH",
    },
    {
      item: 2,
      name: "Chibuike Umoh",
      price: "N12,000",
      course: "Marketing and finance",
      subscription: "Monthly",
      student: 30,
      coupon: "10%",
      date: Date.now(),
      status: true,
      code: "0001KJH",
    },
    {
      item: 3,
      name: "Chibuike Umoh",
      price: "N12,000",
      course: "Introduction to tech",
      subscription: "Monthly",
      student: 30,
      coupon: "10%",
      date: Date.now(),
      status: true,
      code: "0001KJH",
    },
    {
      item: 4,
      name: "Chibuike Umoh",
      price: "N12,000",
      course: "Getting started in fashion designing",
      subscription: "Monthly",
      student: 30,
      coupon: "10%",
      date: Date.now(),
      status: true,
      code: "0001KJH",
    },
    {
      item: 5,
      name: "Chibuike Umoh",
      price: "N12,000",
      course: "Introduction to fashion designing",
      subscription: "Monthly",
      student: 30,
      coupon: "10%",
      date: Date.now(),
      status: false,
      code: "0001KJH",
    },
    {
      item: 6,
      name: "Chibuike Umoh",
      price: "N12,000",
      course: "Introduction to fashion designing",
      subscription: "Monthly",
      student: 30,
      coupon: "10%",
      date: Date.now(),
      status: true,
      code: "0001KJH",
    },
  ];

  return (
    <div className='flex flex-col mx-auto'>
      <CreatorTable columns={columns} data={data} title='Published Courses' showFilter={showFilter} showExport={showExport} />
    </div>
  );
};

export default PublishedCourses;
