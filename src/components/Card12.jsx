export default function Card12({ img, title, date, time }) {
    return (
        <>
            <div className="rounded-[20px] shadow-[0px_0px_70px_0px_rgba(0,0,0,0.05)] dark:shadow-[3px_3px_100px_0px_rgba(0,0,0,0.05)]">
                <div className="mb-[29px]">
                    <img src={img} alt="" />
                </div>
                <div className="p-[0_29px] pb-[29px]">
                    <h3 className="text-[rgba(31,36,40,1)] text-[22px] font-[bold] mb-[22px] dark:text-[white]">{title}</h3>
                    <div className="flex justify-between">
                        <p className="text-[14px] text-[rgba(34,34,34,1)] opacity-[50%] font-[medium] dark:text-[white]">{date}</p>
                        <div className="flex items-center">
                            <img className="mr-[9px]" src="/src/assets/Clock.svg" alt="" />
                            <li className="list-none text-[14px] text-[rgba(34,34,34,1)] opacity-[50%] font-[medium] dark:text-[white]">Читать:<span className="pl-[5px] font-[medium]">{time}</span></li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}