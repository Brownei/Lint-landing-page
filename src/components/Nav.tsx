import { useState } from 'react'
import Logo from '../assets/Logo.png'
import {Icon} from '@iconify/react'

const Nav = () => {
  const [isToggle, setIsToggle] = useState(false)

  return (
    <nav className='relative container mx-auto p-5'>
        <div className='flex justify-between items-center'>
          <img src={Logo} alt="LinT Logo" />
          <div>
            <div className='hidden items-center gap-[20px] md:flex'>
              <button type='button' onClick={() => {
                const element = document.getElementById('hero')
                element?.scrollIntoView({
                  behavior: 'smooth',
                  inline: "nearest"
                });
              }}>Home</button>
              <button type='button' onClick={() => {
                const element = document.getElementById('about')
                element?.scrollIntoView({
                  behavior: 'smooth',
                  inline: "nearest"
                });
              }}>About</button>
              <button type='button' onClick={() => {
                const element = document.getElementById('features')
                element?.scrollIntoView({
                  behavior: 'smooth',
                  inline: "nearest"
                });
              }}>Features</button>
              <button type='button' onClick={() => {
                const element = document.getElementById('getting-started')
                element?.scrollIntoView({
                  behavior: 'smooth',
                  inline: "nearest"
                });
              }}>Getting Started</button>
              <button type='button' onClick={() => {
                const element = document.getElementById('contact')
                element?.scrollIntoView({
                  behavior: 'smooth',
                  inline: "nearest"
                });
              }}>Contact</button>
              <button className='py-[8px] px-[16px] bg-purplishBlue rounded-[32px]'>Login</button>
            </div>

            <button className='block z-50 md:hidden' onClick={() => setIsToggle(prev => !prev)} onBlur={() => setIsToggle(false)}>
              <Icon icon={'majesticons:menu'} fontSize={34} color='#0006B1'/>
            </button>

            {isToggle && (
              <div className='fixed top-0 right-0 left-0 z-30 py-7 bg-white'>
                <button onClick={() => setIsToggle(prev => !prev)} className='fixed right-5 top-6'>
                  <Icon icon={'iconoir:cancel'} fontSize={34} color='#0006B1'/>
                </button>
                <div className='flex flex-col justify-center items-center gap-10 mt-10'>
                  <button type='button' onClick={() => {
                    const element = document.getElementById('hero')
                    element?.scrollIntoView({
                      behavior: 'smooth',
                      inline: "nearest"
                    })
                  }}>
                    Home
                  </button>
                  <button type='button' onClick={() => {
                    const element = document.getElementById('about')
                    element?.scrollIntoView({
                      behavior: 'smooth',
                      inline: "nearest"
                    })
                  }}>
                    About
                  </button>
                  <button type='button' onClick={() => {
                    const element = document.getElementById('features')
                    element?.scrollIntoView({
                      behavior: 'smooth',
                      inline: "nearest"
                    })
                  }}>
                    Features
                  </button>
                  <button type='button' onClick={() => {
                    const element = document.getElementById('getting-started')
                    element?.scrollIntoView({
                      behavior: 'smooth',
                      inline: "nearest"
                    })
                  }}>
                    Getting Started
                  </button>
                  <button type='button' onClick={() => {
                    const element = document.getElementById('contact')
                    element?.scrollIntoView({
                      behavior: 'smooth',
                      inline: "nearest"
                    })
                  }}>
                    Contact
                  </button>
                  <button className='py-[8px] px-[16px] bg-purplishBlue rounded-[32px]'>Login</button>
                </div>
              </div>
            )}
          </div>

          {isToggle && (
            <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/80 overflow-hidden z-20'/>
          )}
        </div>
    </nav>
  )
}

export default Nav