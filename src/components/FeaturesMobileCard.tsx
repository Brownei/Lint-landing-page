
const FeaturesMobileCard = ({url}: {url: string}) => {
  return (
    <div  className='grid place-items-center rounded-t-[16px] bg-purplishBlue size-[266px]'>
        <img className='mt-[50px] rounded-t-[16px] w-[238.87px]' src={url} alt="" />
    </div>
  )
}

export default FeaturesMobileCard