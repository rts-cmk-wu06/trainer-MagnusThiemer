import { ScrollMenu } from "react-horizontal-scrolling-menu";
import Card from "../components/Card";
import Spinner from "../components/Spinner";

const CardCarousel = ({data}) => {
  return ( 
    <>
      {!data && 
        <div className="h-48 w-full flex justify-center items-center">
            <Spinner />
        </div>}
      {data && 
      <div className="ml-6 overflow-hidden">
        <ScrollMenu>
          {data.map((item, index) =>(
            <Card data={item} key={index} />
          ))}    
        </ScrollMenu>
      </div>}
    </>
   );
}
 
export default CardCarousel;