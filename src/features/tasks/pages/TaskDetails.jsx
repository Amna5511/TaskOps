import { NavLink, useParams } from "react-router"

 export const TaskDetails =()=>{
 //pour recuperer une tache et ses parametres de route 
 //
 const{ id }=useParams();

    return(
        <>
        <section className="px-12 py-4 ">
            <NavLink className="text-secondary-400 underline "to="/tasks">Go Back</NavLink>
            <h1 className="text-3xl text-main-800">
                Task number {id}
            </h1>
        </section>
        </>
    )
 }

