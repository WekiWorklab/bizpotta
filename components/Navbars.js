/* eslint-disable @next/next/no-img-element */

import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  XIcon,
} from "@heroicons/react/outline";
import {
  ChartBarIcon,
  CursorClickIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { Fragment } from "react";
import { logo } from "../public";

const navigation = [{ name: "Product", href: "#" }];
const features = [
  {
    name: "Analytics",
    href: "#",
    description:
      "Get a better understanding of where your traffic is coming from.",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    href: "#",
    description: "Speak directly to your customers in a more meaningful way.",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    href: "#",
    description: "Your customers' data will be safe and secure.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    href: "#",
    description: "Connect with third-party tools that you're already using.",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    href: "#",
    description:
      "Build strategic funnels that will drive your customers to convert",
    icon: RefreshIcon,
  },
];
export default function Navbars() {
  return (
    <Popover as='header' className='relative md:py-8'>
      {({ open }) => (
        <>
          <div className='pt-10'>
            <nav
              className='relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6'
              aria-label='Global'>
              <div className='flex items-center flex-1'>
                <div className='flex items-center justify-between w-full md:w-auto'>
                  <a href='#'>
                    <span className='sr-only'>Workflow</span>
                    <img className='h-8 w-auto sm:h-10' src={logo.src} alt='' />
                  </a>
                  <div className='-mr-2 flex items-center md:hidden'>
                    <Popover.Button className='bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'>
                      <span className='sr-only'>Open main menu</span>
                      <MenuIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className='hidden md:flex md:items-center '>
                <Link href='/become-a-partner'>
                  <a
                    href='#'
                    className='text-lg inline-flex font-medium items-center px-2 py-1 text-bizpotta-purple  hover:text-gray-300'>
                    Become a Partner
                  </a>
                </Link>

                {/* <Link href='/become-a-tutor'>
                  <a
                    href='#'
                    className='text-lg inline-flex font-medium items-center px-8 py-1 text-bizpotta-purple border-r border-[#BAD5A2] hover:text-gray-300'>
                    Become a Tutor
                  </a>
                </Link> */}
                <Link href='/auth/login'>
                  <a
                    href='#'
                    className='text-lg inline-flex font-medium items-center px-8 py-2  hover:text-gray-300 rounded-md text-bizpotta-purple'>
                    Login
                  </a>
                </Link>
                <Link href='/auth/register'>
                  <a
                    href='#'
                    className='inline-flex items-center px-8 py-2 border border-transparent text-lg font-medium rounded-md text-white bg-bizpotta-purple hover:bg-gray-700'>
                    Join for free
                  </a>
                </Link>
              </div>
            </nav>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter='duration-150 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'>
            <Popover.Panel
              focus
              static
              className='absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden'>
              <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
                <div className='px-5 pt-4 flex items-center justify-between'>
                  <div>
                    <img
                      className='h-8 w-auto'
                      src='https://tailwindui.com/img/logos/workflow-mark-teal-500-cyan-600.svg'
                      alt=''
                    />
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600'>
                      <span className='sr-only'>Close menu</span>
                      <XIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='pt-5 pb-6'>
                  <div className='px-2 space-y-1'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50'>
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className='mt-6 px-5'>
                    <a
                      href='#'
                      className='block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700'>
                      Start free trial
                    </a>
                  </div>
                  <div className='mt-6 px-5'>
                    <p className='text-center text-base font-medium text-gray-500'>
                      Existing customer?{" "}
                      <a href='#' className='text-gray-900 hover:underline'>
                        Login
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
