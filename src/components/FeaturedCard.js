import { Link } from 'react-router-dom'
import { AiFillStar } from "react-icons/ai";
import Spinner from './Spinner';

const FeaturedCard = ({data}) => {
    return ( 
      <>
      {!data && 
        <div className='h-96 rounded-3xl overflow-hidden mx-6 mb-4 bg-tertiary flex justify-center items-center'>
          <Spinner />
        </div>}
      {data &&
        <Link to={`/classdetails/${data.id}`} className="">
          <div style={{
            backgroundImage: `url(${data.asset.url})`,
            backgroundSize: 'cover'
          }} className='flex h-96 rounded-3xl overflow-hidden mx-6 mb-4'>
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
      }
      </>
   );
}
 
export default FeaturedCard;