

const TrainerCard = ({data}) => {
  console.log(data)
  return ( 
    
    <div className="flex">
      <div className="w-28 h-28 rounded-2xl overflow-hidden object-cover">
        <img src={data.asset.url} alt="" className=""/>
      </div>
      <p className="font-bold text-md mt-6 ml-4">{data.trainerName}</p>
    </div>
   );
}
 
export default TrainerCard;