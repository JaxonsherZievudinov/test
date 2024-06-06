export default function Section1({img,title,desc,btn}) {
    return (
    <div className="startPage rounded-[36px]">
        <div className="max-w-[1290px] xl:max-w-[390px] lg:max-w-[950px] flex-wrap m-auto min-h-[480px] flex items-center justify-center">
        <div className="mt-[20px]">
            <img src={img} alt="" />
        </div>

        <div className="w-[763px] xl:w-[390px] lg:text-center lg:mt-[20px] text-[white] ml-[65px] mb-[20px] xl:ml-0 xl:mt-[10px]">
            <h3 className="text-[30px] leading-[40px] font-[bold]">{title}</h3>
            <p className="text-[18px] xl:w-[390px] w-[834px] md:w-[704px] md:text-center mt-[11px]">{desc}</p>
            <button className="text-[17px] font-[bold] mt-[30px] h-[66px] xl:w-[390px] w-[240px] btnContact rounded-[36px] shadow-[0px_4px_4px_0px_#01CB7C33]">{btn}</button>
        </div>
    </div>
    </div>
    )
}