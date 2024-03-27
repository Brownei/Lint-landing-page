import Logo from '../assets/Layer 1.svg'

const Nav = () => {

  return (
    <nav className='relative container mx-auto p-5'>
        <div className='flex justify-between items-center'>
          <img src={Logo} alt="LinT Logo" />
          <div>
            <div className='hidden items-center gap-[20px] md:flex'>
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
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Nav