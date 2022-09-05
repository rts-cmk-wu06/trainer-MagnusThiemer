import { Link } from "react-router-dom";

const ScheduleCard = ({data}) => {
  return ( 
    <Link to={`/classdetails/${data.id}`} className='px-6 py-4 border-tertiary border rounded-xl'>
      <p className="font-bold mb-4">{data.className}</p>
      <p>{`${data.classDay} - ${data.classTime}`}</p>
    </Link>
   );
}
 
export default ScheduleCard;