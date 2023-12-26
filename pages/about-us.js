/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9iu1xtkxHf2
 */
import Header from "@/components/Masterclass-Components/Main-Components/Header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Head from "next/head";
import { HomeSideBar } from "pages";
import { useState } from "react";

export default function About() {
  const [show, setShow] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  return (
    <>
      <Head>
        <title key='title'>BizPotta - About Us</title>
      </Head>

      <div className='relative bg-gray-50 '>
        <HomeSideBar
          show={show}
          setShow={setShow}
          slideIn={slideIn}
          setSlideIn={setSlideIn}
        />
        <div className=' bg-gradient-to-b from-[#D6F7BA] to-white  '>
          {/* <Navbars /> */}
          <Header
            show={show}
            setShow={setShow}
            slideIn={slideIn}
            setSlideIn={setSlideIn}
          />

          <div className='relative overflow-hidden'>
            <main className='w-full py-12 md:py-24 lg:py-32'>
              <div className='container px-4 md:px-6 lg:gap-10'>
                <section className='space-y-8'>
                  <div className='space-y-2'>
                    <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                      Who We Are
                    </h2>
                    <p className=' text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-justify py-4'>
                      Bizpotta is Africa&apos;s first integrated business
                      solutions platform dedicated to bridging the skill gap in
                      Nigeria and Africa while offering comprehensive business
                      management and development tools and solutions for MSMEs.
                      Presently, Nigeria has about 41.1 million MSMEs, each
                      grappling with unique business challenges. Our platform
                      provides the resources for building profitable and
                      successful businesses with ease and cost-effectiveness,
                      empowering entrepreneurs at various stages of their
                      entrepreneurship lifecycle. The Bizpotta platform is made
                      up of Bizpotta Learning, a robust platform that offers
                      vocational and capacity-building resources designed to
                      refine the skills and bolster the business acumen of
                      entrepreneurs; and Bizpotta Hub, a dynamic repository
                      offering an array of tools and resources for holistic
                      business development and management. Here, MSMEs can
                      access a wealth of strategic insights and practical
                      solutions tailored to meet the specific challenges they
                      face.
                    </p>
                  </div>
                  <div className='grid lg:grid-cols-2 gap-6'>
                    <Card>
                      <CardHeader>
                        <div className='flex items-center space-x-2'>
                          <ImageIcon className='w-6 h-6' />
                          <h3 className='text-2xl font-bold'>Mission</h3>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className='text-gray-500 md:text-lg/relaxed dark:text-gray-400'>
                          To build successful businesses through knowledge
                          acquisition and capacity building, business management
                          and development support, as well as funding
                          opportunities for entrepreneurs.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <div className='flex items-center space-x-2'>
                          <TargetIcon className='w-6 h-6' />
                          <h3 className='text-2xl font-bold'>Vision</h3>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className='text-gray-500 md:text-lg/relaxed dark:text-gray-400'>
                          To be an integrated business solutions portal building
                          profitable and sustainable businesses.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

function ImageIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <rect width='18' height='18' x='3' y='3' rx='2' ry='2' />
      <circle cx='9' cy='9' r='2' />
      <path d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21' />
    </svg>
  );
}

function TargetIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <circle cx='12' cy='12' r='10' />
      <circle cx='12' cy='12' r='6' />
      <circle cx='12' cy='12' r='2' />
    </svg>
  );
}
