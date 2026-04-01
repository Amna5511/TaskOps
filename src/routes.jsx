import App from "./App"
import { FaqHome } from "./features/data/FaqHome"
import { TaskDetails } from "./features/tasks/pages/TaskDetails"
import { TaskHome } from "./features/tasks/pages/TaskHome"
import { About } from "./layout/pages/About"
import { Home } from "./layout/pages/Home"
import { NotFound } from "./layout/pages/NotFound"

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
                element : <TaskHome/>
            },
            {
                path : 'task/:id',
                element : <TaskDetails/>
            },
            {
                path : 'about',
                element : <About/>
            },
            {
                path : 'faq',
                element : <FaqHome/>
            },



            //'*'= chemin que signifie si aucun des chemin definit en haut  
            {
                 path : '*',
                element : <NotFound/>
               
            }
        ]
    }

]