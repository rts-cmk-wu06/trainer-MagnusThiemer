import { useState, useEffect } from "react";
import H3 from "../components/H3";
import Navbar from "../templates/Navbar";
import axios from 'axios'
import CardCarousel from "../templates/CardCarousel";
import TrainerCard from "../components/TrainerCard";
import Search from "../templates/Search";

const SearchView = () => {
  const [classes, setClasses] = useState()
  const [trainers, setTrainers] = useState()

  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/classes')
    .then(response => setClasses(response.data))
  }, [])
  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/trainers')
    .then(response => setTrainers(response.data))
  }, [])

  return ( 
    <>
      <Navbar />
        {classes && <Search data={classes} placeholder='Search classes'/>}
        <div className="p-6">
          <H3 text='Popular classes'/>
        </div>
        {classes && <CardCarousel data={classes} />}
        <div className="p-6 flex flex-col gap-4">
          <H3 text='Popular trainers'/>
          {trainers && trainers.map((item, index) => (
            <TrainerCard data={item} key={index} />
          ))}
        </div>
        

    </> 
    );
}
 
export default SearchView;