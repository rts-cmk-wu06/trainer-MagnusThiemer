import TrainerCard from "./TrainerCard";
import { useState, useEffect } from 'react';
import axios from 'axios'
import H3 from "./H3";
import Button from "./Button";

const ClassInfo = ({data}) => {
  const [trainerData, setTrainerData] = useState()
  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/trainers/${data.trainerId}`)
    .then(response => setTrainerData(response.data))
  }, [])
  return ( 
    <div className="p-6 flex flex-col gap-6">
      <p>{data.classDay} - {data.classTime}</p>
      <p>{data.classDescription}</p>
      <H3 text='Trainer'/>
      {trainerData && <TrainerCard data={trainerData}/>}
      <Button type='button' text='Sign up' destination='#'/>
    </div>
   );
}
 
export default ClassInfo;