import HeroImage from '../assets/collaboration-hero.png'

const Hero = () => {
  return (
    <header id='hero'>
        <div className='container mx-auto p-2 flex flex-col justify-center items-center gap-[30px] w-full md:mt-[90px]'>
          <div className="flex flex-col justify-center items-center text-center gap-[14px] md:gap-[20px]">
              <h1 className="font-bold text-[2.5rem] w-[400px] md:text-[3.5rem] md:w-[523px] md:leading-[77.45px] lg:text-[4rem]">Share your <span className="text-lightDarkishBlue">Ideas</span> and <span className="text-lightDarkishBlue">collaborate</span></h1>
              <p className="text-[0.9rem] font-normal leading-[22px] w-[359.14px] md:w-[576px] md:text-[1rem]">Collaborative ecosystem, empowering users to share their creative ideas, find like-minded individuals, and collaborate on diverse technology projects</p>
              <button className="py-[8px] px-[16px] rounded-[32px] bg-lightDarkishBlue text-sm text-white md:mt-[20px] md:text-base">Create an account</button>
          </div>
          <img src={HeroImage} alt="Hero image" />
        </div>
    </header>
  )
}

export default Hero