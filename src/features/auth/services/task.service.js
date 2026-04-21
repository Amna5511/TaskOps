import axios from 'axios';
import { tokenAtom } from '../../../atoms/auth.atom';
import { getDefaultStore } from 'jotai';



const taskService = {
    getByUser : async (userId) =>{

        //acces au contenu de latom en dehors de React 
        const token = getDefaultStore().get(tokenAtom);
        
        //jenvoie la requete avec axios et je razjoute le token dedans 

         const response = await axios.get(`http://localhost:3000/api/tasks/user/${userId}`, {
            headers : {
                Authorization : `Bearer ${token}`
            }
         })
         return response.data;



    },
    getAll: async () =>{


     const response = await axios.get('http://localhost:3000/api/tasks/')

    return response.data;


    }

};

export default taskService;