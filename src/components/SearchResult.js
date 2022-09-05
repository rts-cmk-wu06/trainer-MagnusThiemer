import { Link } from "react-router-dom";

const SearchResult = ({data}) => {
  return ( 
    <Link to={`/classdetails/${data.id}`} className="flex flex-col overflow-hidden p-3 border-b border-tertiary">
      <p className="font-bold">{data.className}</p>
      <p className="">Trainer: {data.trainer.trainerName}</p>
      <p>{data.classDay} {data.classTime}</p>
      <p>{data.classDescription}</p>
    </Link>
   );
}
 
export default SearchResult;