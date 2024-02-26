import MobileViewOne from '../assets/10.png'
import MobileViewThreee from '../assets/6.png'
import Mobile from '../assets/12.png'

const Features = () => {
  return (
    <main id='features'>
      <div className="container relative mx-auto p-4 grid justify-center items-center mt-[100px]">
        <div className='flex items-center justify-center'>
          <h2 className='font-bold text-[1.8rem] text-center mb-[30px] w-[253px] md:w-[434px] md:text-[2.4rem] md:leading-[58.09px] lg:text-[2.8rem]'><span className='text-lightDarkishBlue'>Features built for </span>Ease <span className="text-lightDarkishBlue">and</span> Progress</h2>
        </div>

        <div className='grid grid-cols-2 grid-rows-2 gap-5 lg:w-[1240px] lg:px-[105px]'>
          <div className='col-span-1 flex justify-center items-center pt-[40px] bg-purplishBlue h-[320px] overflow-hidden'>
            <img src={MobileViewOne} alt="" />
          </div>
          <div className='row-span-2 flex justify-center items-center pt-[65px] bg-purplishBlue h-full overflow-hidden'>
            <img src={Mobile} alt="" />
          </div>
          <div className='col-span-1 flex justify-center items-center pt-[40px] bg-purplishBlue h-[320px] overflow-hidden'>
            <img src={MobileViewThreee} alt="" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Features