import React from "react";

//////////
import { GoSettings } from "react-icons/go";
import { MdOutlineArrowUpward } from "react-icons/md";
import moment from "moment";
import { useRouter } from "next/router";
import { useState } from "react";
import { TableFooter, TableHeader } from "./Content";
import { NoActivities } from "../../../public";
import CreatorTable, {
  SelectColumnFilter,
  StatusPill,
} from "../../Tables/CreatorTable";

const PublishedCourses = ({ allCourses }) => {
  const router = useRouter();

  const data = allCourses?.map((item, index) => {
    return {
      name: item.name,
      date: moment(item.created_at).format("DD MMM YYYY"),
      price: item.price,
      status: item.status === 1 ? "Active" : "Inactive",
      id: item.id,
      students: 0,
      serial: index + 1,
    };
  });

  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "serial",
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
    <div className="flex flex-col mx-auto">
      <CreatorTable columns={columns} data={data} title="Published Courses" />
    </div>
  );
};

export default PublishedCourses;
