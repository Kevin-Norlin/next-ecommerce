
import { useSession, signOut } from "next-auth/react";
import { BsDatabaseFillAdd, BsDatabaseFillGear } from "react-icons/bs";
import { firstToUpper } from "@/utils/functions/stringfunctions";
import { VscSignOut } from "react-icons/vsc";

interface props {
    showAdd: boolean,
    setShowAdd: (value: boolean) => void,
    showUpdate: boolean,
    setShowUpdate: (value: boolean) => void
}

export const Profile = (props: props) => {
    const { data: session } = useSession();
    const handleClick = (s : string) => {
        if (s === "add") {
            if (props.showUpdate) {
                props.setShowUpdate(false);
            }
            props.setShowAdd(true);
        }
        if (s === "update") {
            if (props.showAdd) {
                props.setShowAdd(false);
            }
            props.setShowUpdate(true);
        }
    }
    return (
        <div>
            <div className="flex w-screen flex-col items-center justify-center gap-10 p-10 text-white bg-logo ">
                <h1 className="text-4xl"> Hi {firstToUpper(session!.user!.email as string)}! </h1>
                <button className="flex gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full " onClick={() => handleClick("add")}>
                    Add product  <BsDatabaseFillAdd />
                </button>
                <button className="flex gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full " onClick={() => handleClick("update")}>
                    Update product  <BsDatabaseFillGear />
                </button>
                <button className="flex gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full " onClick={() => (signOut())}>
                    Sign out <VscSignOut />
                </button>
            </div>



        </div>
    )
}