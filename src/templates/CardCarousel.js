import { ScrollMenu } from "react-horizontal-scrolling-menu";
import Card from "../components/Card";

const CardCarousel = ({data}) => {
  return ( 
    <div className="ml-6 overflow-hidden">
    <ScrollMenu>
      {data.map((item, index) =>(
        <Card data={item} key={index} />
      ))}    
      </ScrollMenu>
    </div>
   );
}
 
export default CardCarousel;