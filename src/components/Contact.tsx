import { Icon } from '@iconify/react/dist/iconify.js'
import FooterImage from '../assets/footer-logo.png'

const Contact = () => {
  return (
    <footer id='contact'>
      <div className='bg-veryDarkBlue flex justify-between items-center py-[20px] px-[50px] mt-[100px]'>
        <img src={FooterImage} alt="" />
        <p className='text-white hidden justify-center items-center gap-1 text-[0.7rem] md:text-[0.9rem] md:flex'>Made with love <span><Icon icon={'fluent-emoji-flat:heart-suit'}/></span>by 4Dsolutions</p>
        <a target='_blank' href="https://twitter.com/Lint_app_">
          <Icon icon={'mdi:twitter'} color='#ffff' fontSize={20}/>
        </a>
      </div>
    </footer>
  )
}

export default Contact