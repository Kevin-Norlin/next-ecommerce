import { ProductType } from "@/utils/types/productTypes";
import { firstToUpper } from "@/utils/functions/stringfunctions";
interface InputProps {
    obj: any,
    inputType: string,
    handleChange: Function,
    options: string[]
}
export const Dropdown = (props:InputProps) => {
    
    return (
        <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        {firstToUpper(props.inputType)} 
                    </label>
                </div>
                <div className="md:w-2/3">
                    <select className="bg-gray-200 appearance-none border-2 border-gray-200 rounded 
                                     w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none 
                                     focus:bg-white focus:border-logo" id="inline-full-name" 
                                     name={props.inputType} value={(props.obj?.[props.inputType as keyof ProductType])?.toString()} 
                                     onChange={(event) => {
                                     event.preventDefault(); 
                                     props.handleChange(event)}} >
                                        {props.options.map((option, index) => (
                                            <option key={index} value={option}>
                                             {option}
                                            </option>
  ))}

                                     </select>
                </div>
            </div>
    )
}


