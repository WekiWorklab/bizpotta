import Header from "@/components/Masterclass-Components/Main-Components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Head from "next/head";
import Link from "next/link";
import { HomeSideBar } from "pages";
import { useState } from "react";

export default function BecomeATutor() {
  const [show, setShow] = useState(false);
  const [slideIn, setSlideIn] = useState(false);
  return (
    <>
      <Head>
        <title key='title'>BizPotta - Become A Tutor</title>
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

          <main className='container mx-auto py-10 px-4 md:px-6 lg:px-8'>
            <section className='space-y-6'>
              <div className='text-center'>
                <h1 className='text-4xl font-bold'>How to Become a Tutor</h1>
                <p className='text-lg text-gray-500 dark:text-gray-400'>
                  Join our platform and share your knowledge with eager students
                  around the world. Follow these simple steps to start your
                  tutoring journey.
                </p>
                <InterestList />
              </div>
              <div className='grid gap-6'>
                <Card className='bg-white dark:bg-gray-800'>
                  <CardHeader>
                    <h2 className='text-2xl font-bold'>
                      Step 1: Expression of Interest
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-500 dark:text-gray-400'>
                      Submit an expression of interest through the official
                      Bizpotta website or designated contact channels.
                    </p>
                  </CardContent>
                </Card>
                <Card className='bg-white dark:bg-gray-800'>
                  <CardHeader>
                    <h2 className='text-2xl font-bold'>
                      Step 2: Assessment and Qualification
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-500 dark:text-gray-400'>
                      Bizpotta will review the expression of interest to assess
                      alignment with partnership goals and eligibility criteria.
                    </p>
                  </CardContent>
                </Card>
                <Card className='bg-white dark:bg-gray-800'>
                  <CardHeader>
                    <h2 className='text-2xl font-bold'>
                      Step 3: Negotiation and Agreement
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-500 dark:text-gray-400'>
                      ● Engage in negotiations to determine the terms of the
                      partnership agreement. <br />● Sign a formal agreement
                      outlining roles, responsibilities, and mutual benefits.
                    </p>
                  </CardContent>
                </Card>
                <Card className='bg-white dark:bg-gray-800'>
                  <CardHeader>
                    <h2 className='text-2xl font-bold'>
                      Step 4: Onboarding and Integration
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-500 dark:text-gray-400'>
                      ● Complete an onboarding process to familiarize the
                      partner with Bizpotta&apos;s platform and ecosystem.{" "}
                      <br />● Integrate partner services or solutions into the
                      platform, if applicable.
                    </p>
                  </CardContent>
                </Card>
                <Card className='bg-white dark:bg-gray-800'>
                  <CardHeader>
                    <h2 className='text-2xl font-bold'>
                      Step 5: Launch and Promotion
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-500 dark:text-gray-400'>
                      ● Jointly announce the partnership through official
                      channels. <br />● Leverage Bizpotta&apos;s promotional
                      channels to create awareness about the partnership.
                    </p>
                  </CardContent>
                </Card>
                <Card className='bg-white dark:bg-gray-800'>
                  <CardHeader>
                    <h2 className='text-2xl font-bold'>
                      Step 6: Ongoing Collaboration
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-500 dark:text-gray-400'>
                      ● Regular communication and collaboration to ensure the
                      success of joint initiatives. <br />● Participation in
                      joint events, webinars, or training programmes.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className='flex justify-center'>
                <Link href='/auth/register'>
                  <Button className='w-full max-w-md'>Sign Up Now</Button>
                </Link>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

const InterestList = () => {
  const interests = [
    "Experienced professionals with expertise in a specific business-related field..",
    "Educators, trainers, or industry experts passionate about sharing knowledge.",
    "Individuals with a track record of successful entrepreneurship or business management.",
    "Training institutions or organizations with a focus on capacity building for MSMEs",
  ];

  return (
    <div>
      <ul className='list-disc list-inside text-gray-500'>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </div>
  );
};
