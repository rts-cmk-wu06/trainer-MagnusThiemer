import { AiFillStar } from "react-icons/ai";
import { useContext } from 'react';
import { StateContext } from '../context/Context';

const ClassHeader = ({data}) => {
  const { userData, setUserData } = useContext(StateContext);
  return ( 
    <header className="-mt-20">
      <div className='h-80 object-cover flex justify-end flex-col' style={{
        backgroundImage: `url(${data.asset.url})`,
        backgroundSize: 'cover'
      }}>
        <h1 className="font-bold text-primary text-3xl ml-6 mb-4">{data.className}</h1>
        <div className='flex ml-6 mb-4 items-center'>
          <AiFillStar className='text-primary mr-2'/>
          <AiFillStar className='text-primary mr-2'/>
          <AiFillStar className='text-primary mr-2'/>
          <AiFillStar className='text-primary mr-2'/>
          <AiFillStar className='text-primary mr-2'/>
          <p className="text-primary">5/5</p>
          {userData && <button className="py-3 px-7 rounded-full text-center uppercase font-bold border-primary border-2 text-primary ml-6">Rate</button>}
        </div>
      </div>
    </header>
   );
}
 
export default ClassHeader;