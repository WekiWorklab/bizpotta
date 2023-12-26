import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function BecomeAPartner() {
  return (
    <main className='container mx-auto py-10 px-4 md:px-6 lg:px-8'>
      <section className='space-y-6'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold'>How to Become a Tutor</h1>
          <p className='text-lg text-gray-500 dark:text-gray-400'>
            Join our platform and share your knowledge with eager students
            around the world. Follow these simple steps to start your tutoring
            journey.
          </p>
        </div>
        <div className='grid gap-6'>
          <Card className='bg-white dark:bg-gray-800'>
            <CardHeader>
              <h2 className='text-2xl font-bold'>Step 1: Sign Up</h2>
            </CardHeader>
            <CardContent>
              <p className='text-gray-500 dark:text-gray-400'>
                Begin by creating a tutor account on our platform. Provide all
                the necessary details, including your academic qualifications
                and areas of expertise.
              </p>
            </CardContent>
          </Card>
          <Card className='bg-white dark:bg-gray-800'>
            <CardHeader>
              <h2 className='text-2xl font-bold'>
                Step 2: Create Your Profile
              </h2>
            </CardHeader>
            <CardContent>
              <p className='text-gray-500 dark:text-gray-400'>
                Fill out your profile with relevant information about your
                tutoring experience, teaching style, and availability.
              </p>
            </CardContent>
          </Card>
          <Card className='bg-white dark:bg-gray-800'>
            <CardHeader>
              <h2 className='text-2xl font-bold'>Step 3: Verification</h2>
            </CardHeader>
            <CardContent>
              <p className='text-gray-500 dark:text-gray-400'>
                We&apos;ll review your application and verify your
                qualifications. This process may take a few days.
              </p>
            </CardContent>
          </Card>
          <Card className='bg-white dark:bg-gray-800'>
            <CardHeader>
              <h2 className='text-2xl font-bold'>Step 4: Start Tutoring</h2>
            </CardHeader>
            <CardContent>
              <p className='text-gray-500 dark:text-gray-400'>
                Once your account is verified, you can start tutoring.
                You&apos;ll be able to accept tutoring requests and schedule
                sessions.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className='flex justify-center'>
          <Button className='w-full max-w-md'>Sign Up Now</Button>
        </div>
      </section>
    </main>
  );
}
