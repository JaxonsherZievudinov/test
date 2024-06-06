import { Rate } from 'antd';

export default function Card8({img, title, desc,date,city}){
    return (
        <div className='text-[#1F2428] h-[260px] flex p-[10px] shadow-[0px_0px_70px_0px_#8A8A8A1A] rounded-[16px]'>
            <div>
                <img className='h-[100%] rounded-[8px] object-cover' src={img} alt="" />
            </div>

            <div className='ml-[38px] m-[10px_0]'>
                <div>
                    <h4 className='text-[18px] font-[bold] mb-[6px]'>{title}</h4>
                    <Rate />
                    <p className='text-[16px] font-[light] mt-[14px]'>{desc}</p>
                </div>

                <div className='mt-[60px]'>
                    <div className='flex'>
                        <h4 className='text-[14px] font-[bold] mr-[15px]'>Дата:</h4>
                        <p className='text-[14px] font-[light]'>{date}</p>
                    </div>

                    <div className='flex'>
                        <h4 className='text-[14px] font-[bold] mr-[15px]'>Город:</h4>
                        <p className='text-[14px] font-[light]'>{city}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}