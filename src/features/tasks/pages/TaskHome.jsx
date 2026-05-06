import { NavLink } from "react-router"
import { TaskUserSelector } from '../components/TaskUserSelector'
import { useAtom, useAtomValue } from 'jotai'
import { taskAtom, selectedUserAtom } from '../../../atoms/task.atom'
import { tokenAtom } from '../../../atoms/auth.atom'
import axios from 'axios'
import  taskService from '../../auth/services/task.service'
import { useState } from 'react'





export const TaskHome =()=>{

    const [loading,setLoading]= useState(false);


    //pour lire le token 
    const token =useAtomValue(tokenAtom);

    //pour modifier et lire les tasks
   const [tasks, setTasks] = useAtom(taskAtom);
    //pour le user selectionne on veut lire et modifier 
 const [userTask, setUserTask] = useAtom(selectedUserAtom);

   // on cree la fonction qui se declanche quand on clique sur un utilisateur dans task selector 
   const handleUserSelected = async (user) =>{

   // sauvegarder le id 
   setUserTask(user)

    setLoading(true);

    const data = await taskService.getByUser(user._id);

    setTasks(data);

    setLoading(false);
  

   


   }
 


    return(
        <>
        <section className="flex items-center gap-6">
            <img className="w-40" src="/icons/mushroom.svg" alt="mushroom " />
            <h1 className="text-3xl text-main-800 font-oswald">
            Here is your full list of tasks 
            </h1>
        </section>
        <section  className="flex flex-col px-12">
           {/*<NavLink to="/task/1">See more details for Task 1</NavLink>
            <NavLink to="/task/2">See more details for Task 2</NavLink>
            <NavLink to="/task/3">See more details for Task 3</NavLink>*/}
            <TaskUserSelector onUserSelected={handleUserSelected}/>
            {loading && <p>Chargement...</p>}

           {!loading && tasks.length > 0 && (
           <ul>
           {tasks.map(task => (
            <li key={task._id}>
                {task.name}
            </li>
             ))}
            </ul>
        )}
        </section>
        
        </>
    )
}
