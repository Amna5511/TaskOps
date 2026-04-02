import { LoginForm } from "./components/LoginForm"


export const Login = () => {

    return (
        <>
         <section className="py-12 px-44 flex flex-col gap-4 items-start ">
                    <h1 className="text-5xl text-main-500 underline">Log In</h1>
                </section>
                
                <section className="flex justify-center gap-4 px-2 py-2 bg-main-200">
                    < LoginForm/>
                </section>
        </>
    )
}