import { RegisterForm } from "./components/RegisterForm"


export const Register = () => {

    return (
        <>
        <section className="py-12 px-44 flex flex-col gap-4 items-start">
            <h1 className="text-5xl text-main-500 underline">Sign In</h1>
        </section>
        
        <section className="flex justify-center">
            <RegisterForm />
        </section>
        </>
    )
}
