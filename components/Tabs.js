function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs({ current }) {
  const tabs = [
    {
      id: 1,
      name: "Agriculture",
      href: "#",
      current: current == 1 ? true : false,
    },
    {
      id: 2,
      name: "Arts",
      href: "#",
      current: current == 2 ? true : false,
    },
    {
      id: 3,
      name: "Business",
      href: "#",
      current: current == 3 ? true : false,
    },
    {
      id: 4,
      name: "Engineering",
      href: "#",
      current: current == 4 ? true : false,
    },
    {
      id: 5,
      name: "IT & Software",
      href: "#",
      current: current == 5 ? true : false,
    },
    {
      id: 6,
      name: "Law",
      href: "#",
      current: current == 6 ? true : false,
    },
    {
      id: 7,
      name: "Design",
      href: "#",
      current: current == 7 ? true : false,
    },
    {
      id: 8,
      name: "Development",
      href: "#",
      current: current == 8 ? true : false,
    },
  ];
  console.log(current);
  return (
    <div>
      <div className='sm:hidden'>
        <label htmlFor='tabs' className='sr-only'>
          Select a tab
        </label>
        <select
          id='tabs'
          name='tabs'
          className='block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className='hidden sm:block'>
        <nav className='flex space-x-4' aria-label='Tabs'>
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(tab.current ? "font-bold" : "text-gray-500 hover:text-gray-700", "px-3 py-2 font-medium text-lg rounded-md")}
              aria-current={tab.current ? "page" : undefined}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
