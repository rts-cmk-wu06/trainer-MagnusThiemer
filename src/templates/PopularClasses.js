import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import FeaturedCard from "../components/FeaturedCard";
import H3 from "../components/H3";
import Spinner from "../components/Spinner";
import CardCarousel from "./CardCarousel";

const PopularClasses = () => {

  const [classes, setClasses] = useState();
  const getRandomClass = () => Math.floor(Math.random() * classes.length)

  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/classes')
    .then(response => setClasses(response.data))
  }, [])

  return ( 
    <section className="">
      <FeaturedCard data={classes && classes[getRandomClass()]}/>
      <div className="mb-4 ml-6">
        <H3 text='Classes for you'/>
      </div>
      <CardCarousel data={classes && classes} />
    </section>
   );
}
 
export default PopularClasses;