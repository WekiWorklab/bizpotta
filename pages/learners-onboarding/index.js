import React from "react";
import LibraryRadioButton from "../../components/LibraryRadioButton";
import Tabs from "../../components/Tabs";

export default function index() {
  const optionsLists = [
    {
      id: 1,
      name: "Agriculture",
      href: "#",
    },
    {
      id: 2,
      name: "Arts",
      href: "#",
    },
    {
      id: 3,
      name: "Business",
      href: "#",
    },
    {
      id: 4,
      name: "Engineering",
      href: "#",
    },
    {
      id: 5,
      name: "IT & Software",
      href: "#",
    },
    {
      id: 6,
      name: "Law",
      href: "#",
    },
    {
      id: 7,
      name: "Design",
      href: "#",
    },
    {
      id: 8,
      name: "Development",
      href: "#",
    },
  ];
  return (
    <div className='w-full h-screen bg-gray-50 md:px-52 py-40 px-4 font-light'>
      <h1 className='font-fancy text-2xl md:text-3xl text-bizpotta-purple px-4'>Explore our course library</h1>
      <div className='flex flex-col space-y-4 py-4'>
        <Tabs />
        <div className='flex flex-col items-center justify-center gap-6 md:grid md:grid-cols-3 md:gap-8  py-8'>
          {optionsLists.map((option, index) => (
            <LibraryRadioButton key={index} option={option} />
          ))}
        </div>
      </div>
    </div>
  );
}
