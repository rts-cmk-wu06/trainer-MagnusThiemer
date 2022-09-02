import TrainerCard from "./TrainerCard";
import { useState, useEffect } from 'react';
import axios from 'axios'
import H3 from "./H3";
import Button from "./Button";
import { useContext } from "react";
import { StateContext } from "../context/Context";

const ClassInfo = ({data}) => {
  const [trainerData, setTrainerData] = useState()
  const [isSignedUp, setIsSignedUp] = useState(false)
  const { userData } = useContext(StateContext)
  console.log(data)
  console.log(userData)
  const config = {
    headers: { Authorization: `Bearer ${userData.token}` }
  };
  const signUp = () => {
    axios.post(`http://localhost:4000/api/v1/users/${userData.userId}/classes/${data.id}`,{}, config)
    .then((response) => {
      setIsSignedUp(true)
      console.log(response)})
  }

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
      {userData && 
        <>
          {!isSignedUp && <button onClick={() => signUp()}>{`Sign up (${data.users.length}/${data.maxParticipants})`}</button>}
        </>
      }
      
    </div>
   );
}
 
export default ClassInfo;