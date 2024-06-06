import strelka from "../../assets/Vector 12.svg"

export default function Card5 ({img,title,time,price,all}){
    return (
        <div className="h-[104px] flex items-center justify-between">
                <div className="text-[#222222] ml-[30px] flex items-center">
                    <div>
                    <img src={img} alt="" />
                    </div>
                    <p className="text-[18px] text-[#1F2428] font-[bold] ml-[27px]">{title}</p>
                </div>

                <div className="flex items-center">
                <div className="p-[0_50px] border-l border-r border-solid xl:hidden border-[#C0C9D7]">
                    <p className="text-[14px] md:text-[12px]">Сроки:</p>
                    <h4 className="text-[20px] md:text-[14px] font-[bold]">{time}</h4>
                </div>

                <div className="p-[0_50px] border-r border-solid xl:hidden border-[#C0C9D7]">
                    <p className="text-[14px] md:text-[12px]">Стоимость доставки:</p>
                    <h4 className="text-[20px] md:text-[14px]  font-[bold]">{price}</h4>
                </div>

                <div className="p-[0_50px] border-r border-solid xl:hidden border-[#C0C9D7]">
                <p className="text-[14px]  md:text-[14px]">Итого:</p>
                    <h4 className="text-[20px] font-[bold] md:text-[16px] ">{all}</h4>
                </div>

                <div className="p-[0_17px]">
                    <img src={strelka} alt="" />
                </div>
                </div>
        </div>
    )
}