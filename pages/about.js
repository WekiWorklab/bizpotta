/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9iu1xtkxHf2
 */
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Component() {
  return (
    <main className='w-full py-12 md:py-24 lg:py-32'>
      <div className='container px-4 md:px-6 lg:gap-10'>
        <section className='space-y-8'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Who We Are
            </h2>
            <p className='max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
              We are a group of passionate individuals committed to making a
              difference in the world. We believe in innovation, collaboration,
              and the power of ideas.
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
                  Our mission is to empower individuals and organizations
                  through technology, fostering innovation, and driving positive
                  change in the world.
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
                  Our vision is to be a leading provider of innovative solutions
                  that redefine the future of technology and create a better
                  world.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
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
