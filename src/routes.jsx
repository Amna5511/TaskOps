import App from "./App"
import { FaqHome } from "./features/data/FaqHome"
import { TaskDetails } from "./features/tasks/pages/TaskDetails"
import { TaskHome } from "./features/tasks/pages/TaskHome"
import { About } from "./layout/pages/About"
import { Home } from "./layout/pages/Home"
import { NotFound } from "./layout/pages/NotFound"
import { Register } from "./features/auth/Register"
import { Login } from "./features/auth/Login"
import { ProtectedPage } from "./features/auth/components/ProtectedPage"

/**
 * @type { import("react-router").RouteObject}
 */

export const routes  =[

    {
        path : '/',
        element : <App />,
        children : [
            {
                index : true,
                element : <Home/>
            },
            {
                path : 'tasks',
                element : <ProtectedPage><TaskHome/></ProtectedPage>
            },
            {
                path : 'task/:id',
                element : <ProtectedPage><TaskDetails/></ProtectedPage>
            },
            {
                path : 'about',
                element : <About/>
            },
            {
                path : 'faq',
                element : <FaqHome/>
            },
             {
                path : "auth",
                children : [
                    {
                        path: 'register',
                        element : <Register/>
                    },
                     {
                        path: 'login',
                        element : <Login/>
                    }
                ] 
            },
             //'*'= chemin que signifie si aucun des chemin definit en haut  
           {
                 path : '*',
                element : <NotFound/>
               
            }
        ]
    }

]