const Header = (props) => {

  return ( 
    <div className={props.className}>
      <h1 className="text-primary font-bold text-6xl ml-10 mb-6">{props.header1}</h1>
      <h2 className={`relative header-h2-white text-white text-${props.secondaryColor} ml-10 inline-block text-2xl font-bold`}>{props.header2}</h2>
    </div>
   );
}
 
export default Header;