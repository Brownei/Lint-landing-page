import OnboardingPagePicture from '../assets/Onboarding-page--31.png'
import OnboardingPagePictureTwo from '../assets/Onboarding-page-1.png'
import OnboardingPagePictureThree from '../assets/collaboration.png'

const GettingStarted = () => {
  return (
    <main id='getting-started'>
      <div className="mt-[100px] container relative mx-auto p-5">
        <div className='flex items-center justify-center mb-[30px]'>
          <h1 className="font-bold text-[2rem] md:text-[2.5rem] md:leading-[58.09px] lg:text-[3.5rem]">How to get  <span className="text-lightDarkishBlue">started</span></h1>
        </div>

        <div className='grid grid-cols-1 place-content-center place-items-center gap-6 md:grid-cols-2'>
          <div className="grid justify-center items-start">
            <div className='lg:w-[612px]'>
              <img className='border-t-[13px] border-r-[13px] rounded-md border-lightDarkishBlue' src={OnboardingPagePicture} alt="" />
            </div>
            <div className='flex gap-4 items-center justify-start mt-[20px]'>
              <span className='w-[32px] h-[32px] bg-lightDarkishBlue text-white rounded-full flex justify-center items-center'>1</span>
              <p className='font-bold text-[1rem] md:text-[1.3rem] lg:text-[1.5rem]'>Create your <span className='text-lightDarkishBlue'>account</span></p>
            </div>
          </div>

          <div className="grid justify-center items-start">
            <div className='lg:w-[612px]'>
              <img className='border-t-[13px] border-r-[13px] rounded-md border-darkPurple' src={OnboardingPagePictureTwo} alt="" />
            </div>
            <div className='flex gap-4 items-center justify-start mt-[20px]'>
              <span className='w-[32px] h-[32px] bg-darkPurple text-white rounded-full text-center flex justify-center items-center'>2</span>
              <p className='font-bold text-[1rem] md:text-[1.3rem] lg:text-[1.5rem]'>Setup your <span className='text-darkPurple'>profile</span></p>
            </div>
          </div>

          <div className="grid justify-center items-start">
            <div className='lg:w-[612px]'>
              <img className='border-t-[13px] border-r-[13px] rounded-md border-orange' src={OnboardingPagePictureThree} alt="" />
            </div>
            <div className='flex gap-4 items-center justify-start mt-[20px]'>
              <span className='w-[32px] h-[32px] bg-orange text-white rounded-full text-center flex justify-center items-center'>3</span>
              <p className='font-bold text-[1rem] md:text-[1.3rem] lg:text-[1.5rem]'>Explore <span className='text-orange'>ideas</span></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default GettingStarted