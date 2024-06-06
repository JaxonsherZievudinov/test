export default function Card13({ img, title }) {
    return (
        <>
            <div className="shadow-[0px_0px_70px_0px_rgba(0,0,0,0.05)] rounded-[20px] bg-[white] p-[35px_30px] text-center">
                <div className="flex items-center justify-center mb-[18px]">
                    <img src={img} alt="" />
                </div>
                <p className="font-[bold] text-[14px]">{title}</p>
            </div>
        </>
    )
}