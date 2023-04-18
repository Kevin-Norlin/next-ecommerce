import { ProductType, ProductType_Keyboard, ProductType_Laptop, ProductType_Mouse, ProductType_Mobile, ProductType_PC, ProductType_Tablet } from "@/utils/types/productTypes";
interface InputProps {
    obj: any,
    inputType: string,
    setObj: Function
}
export const Input = (props:InputProps) => {
    
    return (
        <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        {props.inputType} 
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded 
                                     w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none 
                                     focus:bg-white focus:border-logo" id="inline-full-name" 
                                     type="text" name={props.inputType} value={(props.obj?.[props.inputType as keyof ProductType])?.toString()} 
                                     onChange={(event) => {
                                     event.preventDefault(); 
                                     props.setObj(event)}} />
                </div>
            </div>
    )
}