import { Link } from "react-router-dom";
import H2 from "./H2";

const NavMenuItem = ({destination, text}) => {
  return ( 
    <li className="mb-6">
      <Link to={destination}>
        <H2 text={text}/>
      </Link>
    </li>
   );
}
 
export default NavMenuItem;