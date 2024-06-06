export default function Card10({ img, number, title, text }) {
    return (
        <>
            <div className="flex sa:flex-col xl:flex-col">
                <div className="mr-[71px] w-[60%]">
                    <img src={img} alt="" />
                </div>

                <div>
                    <div className="flex mb-[12px] items-center">
                        <div className="border-r h-[70px] flex items-center">
                            <p className="text-[rgba(1,205,125,1)] text-[70px] pr-[46px]">{number}</p>
                        </div>
                        <h3 className="pl-[33px] dark:text-[white] text-[18px] w-[353px] font-[bold]">{title}</h3>
                    </div>
                    <p className="text-[16px] text-[rgba(31,36,40,1)] leading-[36px] dark:text-[white]">{text}</p>
                </div>
            </div>
        </>
    )
}