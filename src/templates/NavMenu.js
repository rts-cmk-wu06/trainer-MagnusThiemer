import NavMenuItem from "../components/NavMenuItem";
import { GrFormClose } from "react-icons/gr"
import { useContext } from 'react';
import { StateContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const NavMenu = ({setToggle}) => {
  console.log(window.document.body.offsetHeight)
  let height = `h-[${window.innerHeight}px]`
  const navigate = useNavigate()
  const { userToken, setUserToken, setUserData } = useContext(StateContext);
  const logOut = () => {
    setUserToken(false);
    setUserData(false)
    navigate('/home')
  }
  return ( 
    <div className={`w-full h-full absolute top-0 bg-white z-20`}>
      <div className="flex justify-end px-6 pt-6 pb-12 ">
        <button onClick={() => setToggle(false)}><GrFormClose className="text-3xl text-secondary" /></button>
      </div>
      <ul className="text-center">
        <NavMenuItem destination='/home' text='Home'/>
        <NavMenuItem destination='/search' text='Search'/>
        {userToken && <NavMenuItem destination='/schedule' text='My Schedule'/>}
        {!userToken && <NavMenuItem destination='/signin' text='Sign In'/>}
        {userToken && <NavMenuItem destination='/home' onClick={logOut} text='Log out' />}
      </ul>
    </div>
   );
}
 
export default NavMenu;