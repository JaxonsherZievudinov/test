export default function Card7 ({img,title,desc}){
    return (
        <div className="p-[35px_37px] pb-[51px] rounded-[16px] shadow-[0px_0px_70px_0px_#8A8A8A1A]">
            <div>
                <img src={img} alt="" />
            </div>

            <div className="text-[#1F2428] mt-[30px]">
                <h4 className="text-[18px] font-[bold] mb-[10px]">{title}</h4>
                <p className="text-[16px] leading-[26px] font-[light]">{desc}</p>
            </div>
        </div>
    )
}