
const FeaturesMobileCard = ({url, index}: {url: string, index: number}) => {
  return (
    <div className='grid place-items-center rounded-t-[16px] bg-purplishBlue size-[266px]' key={index}>
        <img className='mt-[50px] rounded-t-[16px] w-[238.87px]' src={url} alt={String(index)} />
    </div>
  )
}

export default FeaturesMobileCard