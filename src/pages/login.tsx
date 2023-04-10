import RegisterForm from "@/components/RegisterForm";
import ValidateForm from "@/components/ValidateForm";
import CreateProduct from "@/components/CreateProduct";
export default function login() {
    return (
        <>
        <div>
            <div>
                <RegisterForm />
            </div>
            <div>
                <ValidateForm />
            </div>
            <div>
                <CreateProduct />
            </div>
        </div>
        </>
    )
}