import { useSetAtom } from 'jotai'
import { tokenAtom } from '../../../atoms/auth.atom';

export function BtnLogout() {

//recuperer le setter de l atom
const setToken =  useSetAtom(tokenAtom);

//suppression du token une fois quon a logout

const handleLogout = () => {

    setToken(null);

}

return (
     <button className='btn flex flex-row ' onClick={handleLogout} >
        <span>🚪</span>
        <span className='whitespace-nowrap hidden lg:block'>Logout</span>
     </button>

)
}