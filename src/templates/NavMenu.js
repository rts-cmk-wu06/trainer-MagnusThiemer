import NavMenuItem from "../components/NavMenuItem";
import { GrFormClose } from "react-icons/gr"
import { useContext } from 'react';
import { StateContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const NavMenu = ({setToggle}) => {
  const navigate = useNavigate()
  const { userData, setUserData } = useContext(StateContext);
  const logOut = () => {
    setUserData(false);
    navigate('/home')
  }
  return ( 
    <div className="w-full h-screen absolute top-0 bg-white">
      <div className="flex justify-end px-6 pt-6 pb-12 ">
        <button onClick={() => setToggle(false)}><GrFormClose className="text-3xl text-secondary" /></button>
      </div>
      <ul className="text-center">
        <NavMenuItem destination='/home' text='Home'/>
        <NavMenuItem destination='/search' text='Search'/>
        <NavMenuItem destination='/schedule' text='My Schedule'/>
        {!userData && <NavMenuItem destination='/signin' text='Sign In'/>}
        {userData && <NavMenuItem destination='/home' onClick={logOut} text='Log out' />}
      </ul>
    </div>
   );
}
 
export default NavMenu;