import { Link } from 'react-router-dom'
const Button = (props) => {
  return ( 
    <>
      {props.type === 'link' && <Link className={`${props.className} bg-primary py-5 px-10 rounded-full text-center uppercase font-bold`} to={props.destination}>{props.text}</Link>}
      {props.type === 'button' && <button className={`${props.className} bg-primary py-5 px-10 rounded-full text-center uppercase font-bold`}>{props.text}</button>}
    </>
   );
}
 
export default Button;