import RegisterForm from "@/components/form/RegisterForm";
import ValidateForm from "@/components/form/ValidateForm";
import CreateProduct from "@/components/form/CreateProduct";
export default function login() {
    return (
        <>
        <div className="flex items-center justify-baseline flex-col w-screen h-screen gap-20 text-logo text-center">
            <div className="flex items-center w-3/5 justify-between text-center shadow-xl">
            <h1 className="font-bold text-6xl text-center w-96 ">Create a user!</h1>
                <RegisterForm />
            </div>
            <div className="flex items-center w-3/5 justify-between text-center shadow-xl">
            <h1 className="font-bold text-6xl text-center w-96  ">Log in!</h1>
                <ValidateForm />
            </div>
            <div>
                <CreateProduct />
            </div>
        </div>
        </>
    )
}