import FirstAboutPicture from '../assets/clear-images/dae.jpg'
import MobileView from '../assets/clear-images/2.jpg'
import MobileViewTwo from '../assets/clear-images/1.jpg'
import MobileViewThree from '../assets/clear-images/5 (1).jpg'

const About = () => {
  return (
    <main id='about'>
        <div className='container mx-auto p-4 mt-[100px]'>
            <div className='flex items-center justify-center'>
                <h2 className='font-bold text-[1.8rem] text-center mb-[30px] w-[461px] md:w-[799px] md:text-[2.4rem] lg:text-[2.8rem]'><span className='text-lightDarkishBlue'>Collaborating</span> with amazing minds from around the world</h2>
            </div>
            <div className='grid gap-10'>
                <div className="flex flex-col justify-center items-center gap-1 md:gap-10 md:flex-row">
                    <img className='border-t-[10px] border-r-[10px] border-purplishBlue rounded-md md:border-t-[20px] md:border-r-[20px] md:w-[500px] lg:w-[612px]' src={FirstAboutPicture} alt="" />
                    <div>
                        <h4 className=' font-bold text-[1.3rem] md:text-[1.8rem] lg:text-[2rem]'><span className='text-lightDarkishBlue'>Communicate</span> and share thoughts</h4>
                        <p className='text-[0.9rem] sm:w-[360.55px]  md:w-[502.36px] md:leading-[22px] md:text-[1rem]'>Chat and freely share your thoughts, we’ve built this feature to promote communication between collaborators</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-1 md:gap-10 md:flex-row-reverse">
                    <div className='flex justify-center items-center bg-purplishBlue w-[361.69px] h-[295px] overflow-hidden md:w-[500px] md:h-[412px] lg:w-[612px] lg:h-[500px]'>
                        <img className='w-[231.47px] rounded-[16px] mt-[290px] md:mt-[500px] md:w-[393.5px]' src={MobileView} alt="" />
                    </div>
                    <div>
                        <h4 className=' font-bold text-[1.3rem] md:text-[1.8rem] lg:text-[2rem]'><span className='text-lightDarkishBlue'>Express</span> your interest</h4>
                        <p className='text-[0.9rem] sm:w-[360.55px] md:w-[502.36px] md:leading-[22px] md:text-[1rem]'>See an Idea you like? Post your interest. Share what you feel about the idea, ways it can be improved, suggested features or honest compliments.</p>
                    </div>
                </div>
            </div>


            <div className='md:container md:mx-auto md:px-[100px]'>
                <div className='flex items-start justify-start mt-[100px]'>
                    <h2 className='font-bold text-[1.8rem] text-start mb-[30px] w-[461px] md:w-[672px] md:text-[2.4rem] lg:text-[2.8rem]'><span className='text-lightDarkishBlue'>Sharing</span> awesome ideas with creative minds!</h2>
                </div>
                <div className='grid justify-center items-center gap-10'>
                    <div className='flex flex-col justify-center items-center gap-2 md:flex-row'>
                        <div className='flex justify-center items-center pt-[47.64px] bg-purplishBlue w-[360px] h-[360px] overflow-y-hidden rounded-t-[8px] md:h-[612px] md:pt-[80px] md:w-[500px] lg:w-[612px] lg:h-[700px]'>
                            <img className='w-[231.47px] rounded-[16px] mt-[290px] md:mt-[200px] md:w-[393.5px]' src={MobileViewTwo} alt="" />
                        </div>
                        <div className='flex justify-center items-center pt-[47.64px] bg-purplishBlue w-[360px] h-[360px] overflow-y-hidden rounded-t-[8px] md:h-[612px] md:pt-[80px] md:w-[500px] lg:w-[612px] lg:h-[700px]'>
                            <img className='w-[231.47px] rounded-[16px] mt-[290px] md:mt-[290px] md:w-[393.5px]' src={MobileViewThree} alt="" />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-5'>
                    <p className='text-center text-[0.8rem] w-[360.5px] md:w-[612px] md:leading-[22px] md:text-[0.9rem]'>Sharing ideas fosters innovation, collaboration, and growth. By openly exchanging perspectives and insights.</p>
                </div>
            </div>
        </div>
    </main>
  )
}

export default About