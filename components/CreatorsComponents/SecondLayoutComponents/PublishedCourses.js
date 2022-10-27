import React from "react";

//////////
import { GoSettings } from "react-icons/go";
import { MdOutlineArrowUpward } from "react-icons/md";
import moment from "moment";
import { useRouter } from "next/router";
import { useState } from "react";
import { TableFooter, TableHeader } from "./Content";
import { NoActivities } from "../../../public";
import CreatorTable, { SelectColumnFilter, StatusPill } from "../../Tables/CreatorTable";

const PublishedCourses = ({ allCourses }) => {
  const router = useRouter();

  console.log(allCourses);

  const data = allCourses.map((item) => {
    return {
      name: item.name,
      date: item.created_at,
      price: item.price,
      status: item.status,
      id: item.id,
      students: 0,
    };
  });

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "course_id",
      },
      {
        Header: "Course Title",
        accessor: "name",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Students",
        accessor: "students",
      },
      {
        Header: "Status",
        accessor: "status",
        Filter: SelectColumnFilter,
        filter: "includes",
        Cell: StatusPill,
      },
      {
        Header: "Date",
        accessor: "date",
      },
    ],
    []
  );

  return (
    <div className='flex flex-col mx-auto'>
      <CreatorTable columns={columns} data={allCourses} title='Published Courses' />
    </div>
  );
};

export default PublishedCourses;
