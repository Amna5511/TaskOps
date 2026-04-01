import { NavLink } from "react-router"

export const TaskHome =()=>{


    return(
        <>
        <section className="flex items-center gap-6">
            <img className="w-40" src="/icons/mushroom.svg" alt="mushroom " />
            <h1 className="text-3xl text-main-800 font-oswald">
            Here is your full list of tasks 
            </h1>
        </section>
        <section  className="flex flex-col px-12">
            <NavLink to="/task/1">See more details for Task 1</NavLink>
            <NavLink to="/task/2">See more details for Task 2</NavLink>
            <NavLink to="/task/3">See more details for Task 3</NavLink>
        </section>
        
        </>
    )
}
