import Image from "next/image"

interface BoxProps {
    text1: string,
    text2: string,
    imgUrl: string
}

export const MainPageBox = (props:BoxProps) => {
    return (
        <div className="relative w-auto h-[500px] flex items-center justify-start flex-col bg-slate-500 flex-wrap overflow-hidden">
            <img src={props.imgUrl} className=" w-full h-full object-cover"/>

            <div className="absolute inset-0 z-10 flex flex-col gap-10 items-center justify-baseline pt-8 ">
            <h1 className="z-10 text-red-300 font-bold text-3xl">{props.text1}</h1>
            <h1 className="z-10 text-red-300 font-extrabold text-3xl">{props.text2}</h1>
            </div>
            <button className="absolute bottom-0 "> Hello </button>
            
            
        </div>
    )
}