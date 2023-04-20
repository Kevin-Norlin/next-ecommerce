import RegisterForm from "@/components/form/RegisterForm";
import ValidateForm from "@/components/form/ValidateForm";

export default function Login() {
    return (
        <> 
        <div className="flex items-center justify-evenly flex-col w-screen h-screen text-logo text-center  ">
            <div className="flex gap-40 ">
            <h1 className="font-bold text-6xl text-center w-96 ">Create a user!</h1>
                <RegisterForm />
            </div>
            <div className="flex gap-40">
            <h1 className="font-bold text-6xl text-center w-96  ">Log in!</h1>
                <ValidateForm />
            </div>
            
        </div>
        </>
    )
}