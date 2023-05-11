import { GlobalContext } from "@/hooks/context/global";
import { useContext } from "react";
import { Input } from "../ui/Input";

export const SearchBar = () => {
    const {search, setSearch} = useContext(GlobalContext);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setSearch(value);
    }
    return (
        <div>
            <form>
                <Input inputType="none" obj={search} handleChange={handleChange} />
            </form>
            
        </div>
    )
}

