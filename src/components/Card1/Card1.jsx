export default function Card1 ({img,title}){
    return (
        <div className="flex items-center h-[100px]">
            <div>
                <img src={img} alt="" />
            </div>

            <div className="ml-[17px] md:ml-[14px]">
                <p className="text-[16px] md:text-[14px] text-[#1F2428] font-[bold]">{title}</p>
            </div>
        </div>
    )
}