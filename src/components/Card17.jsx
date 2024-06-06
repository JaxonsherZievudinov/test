import React from 'react'

const Card17 = ({title,parag,st,desc}) => {
  return (
    <div className={`h-[132px] pl-[38px] flex rounded-[16px] text-[#222222] justify-between items-center shadow-[0px_0px_70px_0px_#8A8A8A1A] ${st}`}>
    <div className='w-[778px]'>
                <h4 className="text-[18px] font-[bold] leading-[16px]">{title}</h4>
                <p className='text-[14px] mt-[5px]'>{parag}</p>
    </div>
            <div>
                <p className="text-[16px] w-[290px] pl-[30px] border-l leading-[24px] h-[104px] flex items-center border-solid border-[#C0C9D7] font-[bold]">{desc}</p>
                </div>
    </div>
  )
}

export default Card17
