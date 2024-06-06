import React from 'react'

const Card16 = ({title,desc,parag,st}) => {
  return (
    <div className={`h-[100px] pl-[38px] flex rounded-[16px] text-[#222222] justify-between items-center shadow-[0px_0px_70px_0px_#8A8A8A1A] ${st}`}>
        <div className='flex flex-col justify-center'>
                    <h4 className="text-[18px] font-[bold] leading-[16px]">{title}</h4>
                    <p className='text-[14px] mt-[5px]'>{parag}</p>
        </div>

                    <p className="text-[16px] pl-[30px] border-l h-[64px] flex items-center border-solid border-[#C0C9D7] font-[bold]">{desc}</p>
        </div>
  )
}

export default Card16
