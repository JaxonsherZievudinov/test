import strelka from "../../assets/Vector 7.svg"

export default function Card4 ({title,img,name}){
    return (
        <div className="w-[238px] sm:w-[200px] md:w-[185px] lg:w-[170px] text-[#222222]">
            <h5 className="text-[14px] font-[bold] mb-[15px]">{title}</h5>

            <div className="flex items-center justify-between p-[15px_0] border-b border-solid border-[#222222]">
                <p className="text-[16px] font-[light] flex items-center lg:text-[13px]"><img className="mr-[15px]" src={img} alt="" />{name}</p>

                <div>
                    <img src={strelka} alt="" />
                </div>
            </div>
        </div>
    )
}