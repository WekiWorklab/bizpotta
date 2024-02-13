import { CircularFacebook, Instagram, Youtube } from "../public";

const GreenFooter = () => {
  return (
    <div className='w-full  flex flex-col justify-end  '>
      <div className='px-2 md:px-32 bg-bizpotta-green py-12 '>
        <div className='w-full grid grid-cols-3 md:grid-cols-4 gap-x-0 md:gap-x-10 '>
          <div className='flex flex-col items-center gap-y-4 md:gap-y-8  '>
            <p className='font-bold'>Bizpotta</p>
            <div className='flex flex-col gap-y-2 md:gap-y-6 font-medium text-[13px] md:text-base text-center'>
              {navData.Bizpotta.map((el, index) => (
                <p className='' key={index}>
                  {el.name}
                </p>
              ))}
            </div>
          </div>

          <div className='hidden md:flex flex-col items-center gap-y-8 '>
            <p className='font-bold'>Communities</p>
            <div className='flex flex-col gap-y-6 font-medium text-center'>
              {navData.Communities.map((el, index) => (
                <p className='' key={index}>
                  {el.name}
                </p>
              ))}
            </div>
          </div>

          <div className='flex flex-col items-center gap-y-4 md:gap-y-8  '>
            <p className='font-bold'>Company</p>
            <div className='flex flex-col gap-y-2 md:gap-y-6 font-medium text-[13px] md:text-base text-center'>
              {navData.Company.map((el, index) => (
                <p className='' key={index}>
                  {el.name}
                </p>
              ))}
            </div>
          </div>

          <div className='flex flex-col items-center gap-y-4 md:gap-y-8  '>
            <p className='font-bold'>Support</p>
            <div className='flex flex-col gap-y-2 md:gap-y-6 font-medium text-[13px] md:text-base text-center'>
              {navData.Support.map((el, index) => (
                <p className='' key={index}>
                  {el.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='w-full py-4 px-4 md:px-16 bg-[#282828]  flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center text-white gap-x-4'>
          <p className='font-bold'>Copyright 2024</p>
          <p className='text-[13px] font-bold hidden md:block'>
            Bridging the skill gap in Nigeria.
          </p>
        </div>

        <div className='flex flex-row items-center'>
          <CircularFacebook />
          <Instagram />
          <Youtube />
        </div>
      </div>
    </div>
  );
};

export default GreenFooter;

const navData = {
  Bizpotta: [
    { name: "Become a Partner", href: "#" },
    { name: "Bizpotta App Store", href: "#" },
    { name: "Expert Marketpalce", href: "#" },
    { name: "For Developers", href: "#" },
    { name: "For Enterprise", href: "#" },
    { name: "For Government", href: "#" },
  ],

  Communities: [
    { name: "Tutors", href: "#" },
    { name: "Employers", href: "#" },
    { name: "Centers", href: "#" },
    { name: "Learners", href: "#" },
    { name: "About Us", href: "#" },
    { name: "FAQs", href: "#" },
  ],

  Company: [
    { name: "Tutors", href: "#" },
    { name: "Employers", href: "#" },
    { name: "Centers", href: "#" },
    { name: "Learners", href: "#" },
    { name: "About Us", href: "#" },
    { name: "FAQs", href: "#" },
  ],

  Support: [
    { name: "Help center", href: "#" },
    { name: "Blog", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Resources", href: "#" },
    { name: "Developers", href: "#" },
  ],
};
