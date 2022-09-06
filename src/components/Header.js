const Header = (props) => {
  let headerClass = `header-h2-${props.secondaryColor}` 

  return ( 
    <div className={props.className}>
      <h1 className="text-primary font-bold text-6xl ml-10 mb-6">{props.header1}</h1>
      <h2 className={`relative ${headerClass} ${props.secondaryColor === 'white' && 'text-white'} ${props.secondaryColor === 'black' && 'text-black'} ml-10 inline-block text-2xl font-bold`}>{props.header2}</h2>
    </div>
   );
}
 
export default Header;