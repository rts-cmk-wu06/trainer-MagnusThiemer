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
  const [isRepeatDay, setIsRepeatDay] = useState(false)
  const { userData, setUserData, userToken } = useContext(StateContext)

  const config = {
    headers: { Authorization: `Bearer ${userToken.token}` }
  };

  const signUp = () => {
    axios.post(`http://localhost:4000/api/v1/users/${userToken.userId}/classes/${data.id}`,{}, config)
    .then(() => {setIsSignedUp(true)})}

  const leave = () => {
    axios.delete(`http://localhost:4000/api/v1/users/${userToken.userId}/classes/${data.id}`, config)
    .then(() => {
      setIsSignedUp(false)
      setIsRepeatDay(false)
    })}

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/trainers/${data.trainerId}`)
    .then(response => setTrainerData(response.data))
  }, [])

  useEffect(() => {
    if(userToken){
      axios.get(`http://localhost:4000/api/v1/users/${userToken.userId}`, config)
      .then(response => setUserData(response.data))
    }
  }, [isSignedUp])

  useEffect(() => {
    if(userData){
      userData.classes.forEach(item => {
        if(item.id === data.id){ setIsSignedUp(true) }
        if(item.classDay === data.classDay) {setIsRepeatDay(true)}
      })
    }
  }, [userData])

  return ( 
    <div className="p-6 flex flex-col gap-6">
      <p>{data.classDay} - {data.classTime}</p>
      <p>{data.classDescription}</p>
      <H3 text='Trainer'/>
      {trainerData && <TrainerCard data={trainerData}/>}
      {userToken && 
        <>
          {(!isSignedUp && !isRepeatDay) && <button className="bg-primary py-5 px-10 rounded-full text-center uppercase font-bold" onClick={() => signUp()}>{`Sign up (${data.users.length}/${data.maxParticipants})`}</button>}
          {(isSignedUp) && <button className="bg-primary py-5 px-10 rounded-full text-center uppercase font-bold" onClick={() => leave()}>Leave class</button>}
          {(isRepeatDay && !isSignedUp) && <button disabled className="bg-primary py-5 px-10 rounded-full text-center uppercase font-bold">You already have a class on {data.classDay}</button>}
        </>
      }
      
    </div>
   );
}
 
export default ClassInfo;