import React from 'react'

const Card14 = ({img,title,desc,btn}) => {
  return (
    <div>
      <div>
        <img src={img} alt="" />
      </div>

      <div className='text-[#1F2428] mt-[40px]'>
        <h4 className='text-[24px] leading-[36px] font-[bold] mb-[7px]'>{title}</h4>
        <p className='text-[18px] font-[light] leading-[36px] mb-[22px]'>{desc}</p>
        <button className='bg-[#41B7E9] text-[white] rounded-[8px] w-[180px] h-[56px] text-[15px] font-[bold]'>{btn}</button>
      </div>
    </div>
  )
}

export default Card14
