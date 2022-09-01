import { Link } from 'react-router-dom'
import { AiFillStar } from "react-icons/ai";

const FeaturedCard = ({data}) => {
  console.log(data.asset.url)
    return ( 
    <Link to={`/classdetails:${data.id}`} className="m-6">
      <div style={{
        backgroundImage: `url(${data.asset.url})`,
        backgroundSize: 'cover'
      }} className='flex m-6 h-96 rounded-3xl overflow-hidden'>
        <div className='bg-primary self-end p-6 rounded-tr-[3rem]'>
          <p className='font-bold'>{data.className}</p>
          <div className='flex mt-2'>
            <AiFillStar className='text-black mr-2'/>
            <AiFillStar className='text-black mr-2'/>
            <AiFillStar className='text-black mr-2'/>
            <AiFillStar className='text-black mr-2'/>
            <AiFillStar className='text-black mr-2'/>
          </div>
        </div>
      </div>
    </Link>
   );
}
 
export default FeaturedCard;