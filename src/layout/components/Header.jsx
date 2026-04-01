 import { NavLink } from "react-router"
 export const Header = ()=>{

    return(
        <header className="flex justify-between  items-center py-4 px-8 bg-main-100">
            <div className="flex items-center gap-4 ">
                <img src="/icons/mushroom.svg" alt="mushroom" className="w-12"/>
                <p className="text-main-800 text-2xl uppercase font-bold font-oswald">Tasks <span className="text-secondary-800 "> Operator</span></p>
            </div>


            <nav>
                <ul className="flex items-center gap-6 text-lg font-bold font-oswald">
                    <li>
                        <NavLink to="/">Home</NavLink>
                        </li>
                    <li>
                        <NavLink to="/tasks">Tasks</NavLink>
                        </li>
                    <li>
                        <NavLink to="/pomodoro">Pomodoro</NavLink>
                        </li>
                       
                         <li>
                        <NavLink to="/about">About</NavLink>
                        </li>
                         <li>
                        <NavLink to="/faq">FAQ</NavLink>
                        </li>
                         <li>
                            <NavLink className="btn" to="/login">Sign In</NavLink>
                        </li>
                         
                </ul>
            </nav>
        </header>
    )
 }