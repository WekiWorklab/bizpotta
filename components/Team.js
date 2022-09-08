/* eslint-disable @next/next/no-img-element */
const people = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Hi, I am Tolu Oluyemi, I am a Project Management  with over 15+ years of experience. I have helped over 5,000 student get started in tech.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Hi, I am Tolu Ghena, I am a Project Management  with over 15+ years of experience. I have helped over 5,000 student get started in tech.",
  },
];

export default function Team() {
  return (
    <div className='bg-gray-50  '>
      {/* <div className='mx-auto py-4 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'> */}
      <div className='mx-auto py-4 px-4 max-w-7xl sm:px-6 lg:px-0 lg:py-10 '>
        <ul className='space-y-4 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0 '>
          {people.map((person, index) => (
            <li key={index}>
              <div className='py-8 space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8'>
                <div className='h-0 w-30 aspect-w-4 aspect-h-3 sm:aspect-w-3 sm:aspect-h-4 '>
                  <img className='object-cover shadow-lg rounded-lg' src={person.imageUrl} alt='' />
                </div>
                <div className='sm:col-span-2 flex justify-center items-center mt-4'>
                  <div className='flex justify-center items-center'>
                    <div className='text-lg'>
                      <blockquote className='relative text-center p-10 w-full m-1 text-gray-500'>{person.bio}</blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
