import React from 'react'

const Card19 = ({img,title,desc}) => {
  return (
    <div className='h-[280px] shadow-[0px_0px_70px_0px_#8A8A8A1A] rounded-[16px] p-[0_37px] flex flex-col justify-center'>
      <div>
        <img src={img} alt="" />
      </div>

      <div className='mt-[30px] text-[#1F2428]'>
        <h4 className='text-[18px] font-[bold] mb-[10px]'>{title}</h4>
        <p className='text-[16px] font-[light] leading-[30px] w-[480px]'>{desc}</p>
      </div>
    </div>
  )
}

export default Card19
