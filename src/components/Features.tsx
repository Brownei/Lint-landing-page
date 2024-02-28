import MobileViewOne from '../assets/clear-images/iPhone 14 & 15 Pro - 36.jpg'
import MobileViewThreee from '../assets/clear-images/4.jpg'
import Mobile from '../assets/clear-images/iPhone 14 & 15 Pro - 51.jpg'
import useEmblaCarousel from "embla-carousel-react"
import { useEffect } from 'react'
import FeaturesMobileCard from './FeaturesMobileCard'

const Features = () => {
  const images = [
    MobileViewOne,
    MobileViewThreee,
    Mobile,
    // Mobile,
    // Mobile,
    // Mobile,
    // Mobile,
    // Mobile,
    
  ]
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
            return;
        }
    }, [emblaApi])

  return (
    <main id='features'>
      <div className="container relative mx-auto p-4 grid justify-center items-center mt-[100px]">
        <div className='flex items-center justify-center'>
          <h2 className='font-bold text-[1.8rem] text-center mb-[30px] w-[253px] md:w-[434px] md:text-[2.4rem] md:leading-[58.09px] lg:text-[2.8rem]'><span className='text-lightDarkishBlue'>Features built for </span>Ease <span className="text-lightDarkishBlue">and</span> Progress</h2>
        </div>
        <div className='hidden md:block'>
          <div className='grid grid-cols-2 grid-rows-2 gap-5 lg:w-[1240px] lg:px-[105px]'>
            <div className='col-span-1 flex justify-center items-center pt-[40px] bg-purplishBlue h-[300px] overflow-hidden'>
              <img className='mt-[600px] rounded-[16px] md:w-[393.5px]' src={MobileViewOne} alt="" />
            </div>
            <div className='row-span-2 flex justify-center items-center bg-purplishBlue overflow-hidden h-[620px]'>
              <img className='mt-[270px] rounded-t-[16px] md:w-[366.69px]' src={Mobile} alt="" />
            </div>
            <div className='col-span-1 flex justify-center items-center pt-[40px] bg-purplishBlue h-[300px] overflow-hidden'>
              <img className='mt-[600px] rounded-[16px] md:w-[393.5px]' src={MobileViewThreee} alt="" />
            </div>
          </div>
        </div>

        <div className='block overflow-hidden md:hidden' ref={emblaRef}>
          <div className="flex gap-[32px] items-center my-[30px]">
            {images.map((image, index) => (
              <FeaturesMobileCard url={image} key={index}/>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Features