import { Icon } from '@iconify/react/dist/iconify.js'
import FooterImage from '../assets/footer-logo.png'

const Contact = () => {
  return (
    <footer id='contact'>
      <div className='bg-veryDarkBlue flex justify-between items-center py-[20px] px-[50px] mt-[100px]'>
        <img src={FooterImage} alt="" />
        <p className='text-white flex justify-center items-center gap-1'>Made with love <span><Icon icon={'fluent-emoji-flat:heart-suit'}/></span>by 4Dsolutions</p>
        <ul className='flex justify-center items-center gap-3'>
          <li>
            <Icon icon={'ph:globe'} color='#ffff' fontSize={20}/>
          </li>
          <li>
            <Icon icon={'mdi:twitter'} color='#ffff' fontSize={20}/>
          </li>
          <li>
            <Icon icon={'mdi:github'} color='#ffff' fontSize={20}/>
          </li>
          <li>
            <Icon icon={'mdi:linkedin'} color='#ffff' fontSize={20}/>
          </li>
          <li>
            <Icon icon={'ic:baseline-facebook'} color='#ffff' fontSize={20}/>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Contact