import { useId } from "react";
import authService from "../services/auth.service";
import { useNavigate } from "react-router";
import { useSetAtom } from 'jotai';
import { tokenAtom } from  "../../../atoms/auth.atom";

export const LoginForm = () => {

    const id = useId();
    const navigate = useNavigate();
     const setToken = useSetAtom(tokenAtom);

    const handleLoginSubmit = async (formData) => {
        //console.log(formData);


        const data = Object.fromEntries(formData.entries());

        // console.log(data);



       const token = await authService.login(data);

       setToken(token);


        navigate('/');
        


        
    }

    return (
        <>
        
            <form action={handleLoginSubmit} > 
                <div className="flex gap-5 bg-secondary-500 p-4 ">
                    <label htmlFor={id + 'email'} className="bg-main-200 p-4 ">User email :</label>
                    <input id={id + 'email'} name="email" type="text"className="bg-main-200"/>
                </div>

                  <div className="flex gap-5 bg-secondary-500 p-4 ">
                    <label htmlFor={id + 'password'} >Password :</label>
                    <input id={id + 'password'} name="password" type="password"/>
                </div>

                <button type="submit" className="btn">LOGIN </button>
            </form>

        </>
    )
}