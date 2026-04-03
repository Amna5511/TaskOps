import { useId } from "react";
import authService from "../services/auth.service";
import { useNavigate } from "react-router";

export const RegisterForm = () => {

    const id = useId();
    const navigate = useNavigate();

    const handleRegisterSubmit = async (formData) => {
        console.log(formData);


        const data = Object.fromEntries(formData.entries());

        console.log(data);



        await authService.register(data);

        navigate('/');

        //Utilise pas les states, mais peut pas mettre de message d'erreur sans le useActionState

        


        
    }

    return (
        <>
        
            <form action={handleRegisterSubmit}> 
                <div>
                    <label htmlFor={id + 'email'}>User email :</label>
                    <input id={id + 'email'} name="email" type="text"/>
                </div>

                <div>
                    <label htmlFor={id + 'firstname'}>First name :</label>
                    <input id={id + 'firstname'} name="firstname" type="text"/>
                </div>

                <div>
                    <label htmlFor={id + 'lastname'}>Last name :</label>
                    <input id={id + 'lastname'} name="lastname" type="text"/>
                </div>

                <div>
                    <label htmlFor={id + 'password'}>Password :</label>
                    <input id={id + 'password'} name="password" type="password"/>
                </div>

                <button type="submit" className="btn">REGISTER ✨</button>
            </form>

        </>
    )
}