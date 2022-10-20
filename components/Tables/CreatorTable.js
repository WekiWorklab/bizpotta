/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, useSortBy, usePagination } from "react-table";
import { SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";
import classNames from "../../utils/classNames";

import { AiOutlineLeftCircle, AiOutlineLineChart, AiOutlineMenu, AiOutlineRightCircle } from "react-icons/ai";
import { Filter } from "../../public";
import { MdOutlineArrowUpward } from "react-icons/md";
import LChart from "../CreatorsComponents/LayoutComponents/Line-Chart";

export function LinkCell({ value, row }) {
  return (
    <div className='flex items-center'>
      <Link href={`${value}`}>
        <a className=' underline text-takke-green font-semibold'>View Details</a>
      </Link>
    </div>
  );
}

// Define a default UI for filtering
function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 500);

  return (
    <input
      className='w-[500px] text-[13px] text-[#191919] rounded-sm h-[35px] pl-4 outline-none focus:ring-0'
      placeholder='Search income by entering keywords, name, or course'
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      value = {value}
      id='search'
      name='search'
    />
  );
}

// This is a custom filter UI for selecting
// a unique option from a list
export function SelectColumnFilter({ column: { filterValue, setFilter, preFilteredRows, id, render } }) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <label className='flex gap-x-2 items-baseline'>
      <select
        className='rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        name={id}
        id={id}
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
      >
        <option value=''>All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
    // <Dropdown filterValue={filterValue} setFilter={setFilter} />
  );
}

export function StatusPill({ value }) {
  const status = value ? value.toLowerCase() : "unknown";
  return (
    <span
      className={classNames(
        "px-3 py-1 capitalize leading-wide font-bold text-xs rounded-full shadow-sm",
        status.startsWith("paid" || "yes") ? "px-2 inline-flex text-xs leading-5 font-semibold rounded-lg bg-[#6EFF7E] text-green-800" : null,
        status.startsWith("unpaid" || "no") ? "px-2 inline-flex text-xs leading-5 font-semibold rounded-lg bg-[#FDE8E8] text-red-800" : null
      )}
    >
      {status}
    </span>
  );
}
export function DefaultStatusPill({ value }) {
  const status = value ? value.toLowerCase() : "unknown";
  return (
    <span
      className={classNames(
        "px-3 py-1 capitalize leading-wide font-bold text-xs rounded-full shadow-sm",
        status.startsWith("yes") ? "px-2 inline-flex text-xs leading-5 font-semibold rounded-lg bg-[#6EFF7E] text-green-800" : null,
        status.startsWith("no") ? "px-2 inline-flex text-xs leading-5 font-semibold rounded-lg bg-[#FDE8E8] text-red-800" : null
      )}
    >
      {status}
    </span>
  );
}

function CreatorTable({ columns, data }) {
  const [select, setSelected] = useState("table");
  const [showFilter, setShowFilter] = useState(false);
  const [showExport, setShowExport] = useState(false);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    rows,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,

    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters, // useFilters!
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  // UI for your table
  return (
    <div className='my-2 horizontal-scrollbar overflow-x-scroll xl:overflow-x-visible'>
      <div className='min-w-[1050px] xl:w-full h-[55px] mt-6 mb-2 bg-[#9B9FC6] bg-opacity-[0.12] rounded-md flex items-center justify-between px-8'>
        <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} globalFilter={state.globalFilter} setGlobalFilter={setGlobalFilter} />

        <div className='flex items-center gap-x-4'>
          <div
            className='h-[35px] relative centerFlex  w-[120px] text-[#191919] text-[14px] gap-x-3 bg-white rounded-md cursor-pointer'
            onClick={() => {
              setShowFilter((prev) => !prev);
              setShowExport(false);
            }}
          >
            <Filter />
            <p className='font-bold'>Filter</p>
            {showFilter && (
              <div className='absolute top-[40px] w-[180px] py-4 gap-y-2 flex flex-col justify-center items-start dropdown-shadow bg-white rounded-md'>
                <p className='w-full text-left px-3 py-2 cursor-pointer text-[13px] hover:bg-[#858585]'>All earning</p>
                <p className='w-full text-left px-3 py-2 cursor-pointer text-[13px] hover:bg-[#858585]'>Last month earning</p>
                <p className='w-full text-left px-3 py-2 cursor-pointer text-[13px] hover:bg-[#858585]'>Last six month earnings</p>
              </div>
            )}
          </div>

          <div
            className='h-[35px] centerFlex relative w-[120px] text-[#191919] text-[14px] gap-x-3 bg-white rounded-md cursor-pointer'
            onClick={() => {
              setShowFilter(false);
              setShowExport((prev) => !prev);
            }}
          >
            <div className='w-[17px] h-[17px] centerFlex rounded-full border border-[#191919]'>
              <MdOutlineArrowUpward color='#191919' />
            </div>
            <p className='font-bold'>Export</p>

            {showExport && (
              <div className='absolute top-[40px] w-[180px] py-4 gap-y-2 flex flex-col justify-center dropdown-shadow items-center bg-white rounded-md'>
                <p className='w-full text-center py-2 cursor-pointer text-[13px] hover:bg-[#858585]'>Export as CSV</p>
                <p className='w-full text-center py-2 cursor-pointer text-[13px] hover:bg-[#858585]'>Export as .xlsx</p>
              </div>
            )}
          </div>

          {select === "chart" && (
            <div
              className='cursor-pointer w-[30px] h-[30px] flex justify-center items-center rounded-sm bg-white'
              onClick={() => setSelected("table")}
            >
              <AiOutlineMenu size={16} color='#121F4C' />
            </div>
          )}
          {select === "table" && (
            <div
              className='cursor-pointer w-[30px] h-[30px] flex justify-center items-center rounded-sm bg-white'
              onClick={() => setSelected("chart")}
            >
              <AiOutlineLineChart size={16} color='#121F4C' />
            </div>
          )}
        </div>
      </div>
      {/* table */}
      {select === "table" && (
        <div className='overflow-x-auto'>
          <div className='mt-4 flex flex-col'>
            <div className=''>
              <div className='py-2 align-middle inline-block min-w-full '>
                <div className='shadow overflow-hidden border-b border-[#F0F1EB]'>
                  <table {...getTableProps()} className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-gray-50'>
                      {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column) => (
                            // Add the sorting props to control sorting. For this example
                            // we can add them into the header props
                            <th
                              scope='col'
                              className='px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider'
                              {...column.getHeaderProps(column.getSortByToggleProps())}
                            >
                              <div className='flex items-center justify-center'>
                                {column.render("Header")}
                                {/* Add a sort direction indicator */}
                                <span>
                                  {column.isSorted ? (
                                    column.isSortedDesc ? (
                                      <SortDownIcon className='w-4 h-4 text-black' />
                                    ) : (
                                      <SortUpIcon className='w-4 h-4 text-black' />
                                    )
                                  ) : (
                                    <SortIcon className='w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100' />
                                  )}
                                </span>
                              </div>
                            </th>
                          ))}
                          <th></th>
                        </tr>
                      ))}
                    </thead>
                    <tbody {...getTableBodyProps()} className='divide-y divide-[#F0F1EB]'>
                      {page.map((row, i) => {
                        // new
                        prepareRow(row);
                        return (
                          <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                              return (
                                <td
                                  {...cell.getCellProps()}
                                  className='px-2 py-4 max-w-[200px] break-words text-sm text-gray-500 text-center'
                                  role='cell'
                                >
                                  <div className='flex items-center justify-center'>
                                    {cell.column.Cell.name === "defaultRenderer" ? (
                                      <div className='text-sm text-gray-500'>{cell.render("Cell")}</div>
                                    ) : (
                                      cell.render("Cell")
                                    )}
                                  </div>
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {select === "table" && (
        <div className='min-w-[1050px] xl:w-full h-[50px] mt-6 mb-2 bg-[#9B9FC6] bg-opacity-[0.12] rounded-md flex items-center justify-between px-8 text-[13px] text-[#191919] '>
          <div className=' opacity-[0.5]'>
            {state.pageIndex + 1} - {rows.length} of {pageOptions.length}
          </div>

          <div className='flex justify-center items-center gap-x-10'>
            <p className='opacity-[0.5]'>showing {state.pageSize} per Page</p>

            <select
              className='mt-1 block  rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              value={state.pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>

            <div className='h-[25px] border-r-1 border'></div>

            <div className='centerFlex gap-x-3'>
              <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                <AiOutlineLeftCircle size={19} />
              </button>
              <button onClick={() => nextPage()} disabled={!canNextPage}>
                <AiOutlineRightCircle size={19} />
              </button>
            </div>
          </div>
        </div>
      )}
      {select === "chart" && <LChart />}
    </div>
  );
}

export default CreatorTable;

function SortIcon({ className }) {
  return (
    <svg
      className={className}
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 320 512'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z'></path>
    </svg>
  );
}

function SortUpIcon({ className }) {
  return (
    <svg
      className={className}
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 320 512'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z'></path>
    </svg>
  );
}

function SortDownIcon({ className }) {
  return (
    <svg
      className={className}
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 320 512'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z'></path>
    </svg>
  );
}
