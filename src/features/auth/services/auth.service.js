
import axios from "axios";


const authService = {

    register : async (userData) => {

        const response = await axios.post("http://localhost:3000/api/auth/register", userData);
        return response.data;
    },

     login : async (data) => {
        const response =await axios.post("http://localhost:3000/api/auth/login", data);

        console.log("token",response.data.token);
        
        localStorage.setItem("token", response.data.token);

        return response.data;

    }

};

export default authService;