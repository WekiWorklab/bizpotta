/* eslint-disable react/jsx-key */
import React from "react";
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, useSortBy, usePagination } from "react-table";
import { SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";
import classNames from "../../utils/classNames";

import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

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
    <div className='relative text-gray-500 focus-within:text-takke-green'>
      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
        <SearchIcon className='h-5 w-5' aria-hidden='true' />
      </div>
      <input
        id='search'
        name='search'
        className='block w-full pl-10 pr-3 py-2 border border-takke-gray-200 rounded-md leading-5  bg-white bg-opacity-25 text-indigo-100 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm'
        placeholder='Search Repayments'
        type='search'
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
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
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,

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
    <div className='overflow-auto'>
      <div className='mb-10 flex flex-col md:flex-row gap-4 justify-between bg-white p-4 rounded-md'>
        <div className='flex-1 flex md:justify-start'>
          <div className='w-full md:w-auto lg:px-6'>
            <label htmlFor='search' className='sr-only'>
              Search Repayments
            </label>
            <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} globalFilter={state.globalFilter} setGlobalFilter={setGlobalFilter} />
          </div>
        </div>
        <div className='flex gap-4'>
          {headerGroups.map((headerGroup) =>
            headerGroup.headers.map((column) =>
              column.Filter ? (
                <div className='flex-1 takke__overwrite-usetable-select--width' key={column.id}>
                  {column.render("Filter")}
                </div>
              ) : null
            )
          )}
          <button className='flex flex-1 items-center text-sm font-semibold border-2 border-gray-200 p-2 rounded-md hover:shadow-md transition-shadow whitespace-nowrap'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4 mr-2'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z'
              />
            </svg>
            <span className='text-base'>Download CSV</span>
          </button>
        </div>
      </div>
      {/* table */}
      <div className='overflow-x-auto'>
        <div className='mt-4 flex flex-col'>
          <div className=''>
            <div className='py-2 align-middle inline-block min-w-full '>
              <div className='shadow overflow-hidden border-b border-[#F0F1EB]'>
                <table {...getTableProps()} className='min-w-full divide-y divide-[#F0F1EB]'>
                  <thead className='bg-white shadow-sm'>
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          // Add the sorting props to control sorting. For this example
                          // we can add them into the header props
                          <th
                            scope='col'
                            className='group px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider'
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
                              <td {...cell.getCellProps()} className='px-6 py-4 whitespace-nowrap' role='cell'>
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
      {/* Pagination */}
      <div className='min-w-[1050px] xl:w-full h-[50px] mt-6 mb-2 bg-[#9B9FC6] bg-opacity-[0.12] rounded-md flex items-center justify-between px-8 text-[13px] text-[#191919] '>
        <div className=' opacity-[0.5]'>
          {state.pageIndex + 1} - {state.pageIndex + 1} of {pageOptions.length}
        </div>

        <div className='flex justify-center items-center gap-x-10'>
          <p className=' opacity-[0.5]'>You are currently on Page</p>

          <select
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            value={state.pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
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
