import { firstToUpper } from "@/utils/functions/stringfunctions";

interface InputProps {
    obj: any,
    inputType: string,
    handleChange: Function
}
export const Input = (props:InputProps) => {
    
    return (
        <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        {props.inputType !== "none" ? firstToUpper(props.inputType) : "Search: "} 
                    </label>
                </div>
                <div className="md:w-2/3">
                   { props.inputType !== "none" ? <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded 
                                     w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none 
                                     focus:bg-white focus:border-logo" id="inline-full-name" 
                                     type="text" name={props.inputType} value={(props.obj?.[props.inputType])?.toString()} 
                                     onChange={(event) => {
                                    
                                     props.handleChange(event)}} />
                                                :
                                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded 
                                                w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none 
                                                focus:bg-white focus:border-logo" id="inline-full-name" 
                                                type="text" name={props.obj} value={(props.obj)} 
                                                onChange={(event) => {
                                               
                                                props.handleChange(event)}} />
                                                           

                                     }
                </div>
            </div>
    )
}