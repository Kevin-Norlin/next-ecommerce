import Link from "next/link";
import {FaGithub} from "react-icons/fa";
export const Footer = () => {
    return (
        <div className="flex flex-row justify-center items-center flex-wrap mx-auto px-20 bg-slate-500 bottom-0 
                        bg-inherit w-screen h-24 
                        shadow-lg duration-300">
            <Link className="flex flex-row gap-5 items-center" href='https://github.com/Kevin-Norlin/next-buggfri'>
            <h1>Github</h1>
            <FaGithub  size="38"/>
            </Link>
        </div>
    );
};