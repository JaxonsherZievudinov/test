export default function Card2({img,desc,title}){
    return (
        <div className="flex items-center h-[100px] bg-[#F2F6FC] w-[300px] rounded-[16px] justify-center">
            <div className="mr-[28px]">
                <img src={img} alt="" />
            </div>

            <div>
                <p className="text-[18px] text-[#1F2428]">{desc}</p>
                <h4 className="text-[26px] text-[#1F2428] font-[bold]">{title}</h4>
            </div>
        </div>
    )
}