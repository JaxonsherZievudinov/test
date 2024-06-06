export default function Card11({ img, title, price, man, woman, kids }) {
    return (
        <>
            <div className="flex bg-[white] rounded-[18px]">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="p-[14px_25px] pl-[30px]">
                    <h3 className="text-[rgba(31,36,40,1)] text-[20px] mb-[10px] font-[bold]">{title}</h3>
                    <p className="text-[15px] mb-[10px]">цены от <span className="font-[bold] text-[15px]">{price}</span> разделе:</p>
                    <p className="text-[15px] mb-[10px]">мужские вещи:<span className="font-[bold] text-[rgba(1,205,125,1)] pl-[5px]">{man}</span></p>
                    <p className="text-[15px] mb-[18px]">женские вещи:<span className="font-[bold] text-[rgba(1,205,125,1)] pl-[5px]">{woman}</span></p>
                    <p className="text-[15px] mb-[18px]">качественные детские вещи на <span className="font-[bold] text-[rgba(1,205,125,1)]">{kids}</span></p>
                    <button className="text-[rgba(1,205,125,1)] text-[14px] font-[bold]">Только выкуп с оператором →</button>
                </div>
            </div>
        </>
    )
}