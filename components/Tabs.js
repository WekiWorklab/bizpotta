import { useRouter } from "next/router";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs({ current, courseCategories }) {
  const tabs = courseCategories;
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/learners-onboarding/${id}`);
  };

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          defaultValue={tabs.find((tab) => tab.current)?.name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block w-[550px] mx-auto lg:w-full overflow-x-scroll lg:overflow-x-visible horizontal-scrollbar">
        <nav className="flex space-x-4 justify-center items-center" aria-label="Tabs">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href="#"
              onClick={() => handleClick(tab.id)}
              className={classNames(
                tab.id == current
                  ? "font-bold"
                  : "text-gray-500 hover:text-gray-700",
                "px-3 py-2 font-medium   xl:text-lg rounded-md"
              )}
              aria-current={tab.id == current ? "page" : undefined}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
