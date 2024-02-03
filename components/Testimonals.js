/* eslint-disable @next/next/no-img-element */

export default function Testimonals() {
  return (
    <div className='max-w-sm rounded overflow-hidden '>
      <>
        <img
          className='w-full rounded-lg h-full max-h-[300px]'
          src='/test2.webp'
          alt='Sunset in the mountains'
        />
        <div className=' py-4'>
          <div className='font-bold text-xl mb-2'>Micheal Okechukwu</div>
          <p className='text-gray-700 text-base'>
            My name is Micheal Okechukwu, I run an Agro-value chain known as
            Anotu Ventures. I had the opportunity to be part of the Bizpotta
            Business Lounge and it has helped impact my business decisions
            positively. Hearing the business journeys of seasoned business
            people in the Lounge helped me recognize and exploit hidden
            opportunities in my field. This has led to a leap in our business
            growth. (CEO, Anotu Ventures)
          </p>
        </div>
      </>
    </div>
  );
}
