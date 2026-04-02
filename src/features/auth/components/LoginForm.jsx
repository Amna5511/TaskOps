import { useId } from "react";
import authService from "../services/auth.service";
import { useNavigate } from "react-router";

export const LoginForm = () => {

    const id = useId();
    const navigate = useNavigate();

    const handleLoginSubmit = async (formData) => {
        console.log(formData);


        const data = Object.fromEntries(formData.entries());

        console.log(data);



        await authService.login(data);

        navigate('/');
        


        
    }

    return (
        <>
        
            <form action={handleLoginSubmit} > 
                <div className="flex gap-5 bg-secondary-500 p-4 ">
                    <label htmlFor={id + 'email'} className="bg-main-200 p-4 ">Email d'utilisateur :</label>
                    <input id={id + 'email'} name="email" type="text"className="bg-main-200"/>
                </div>

                  <div className="flex gap-5 bg-secondary-500 p-4 ">
                    <label htmlFor={id + 'password'} >Mot de passe :</label>
                    <input id={id + 'password'} name="password" type="password"/>
                </div>

                <button type="submit" className="btn">LOGIN </button>
            </form>

        </>
    )
}