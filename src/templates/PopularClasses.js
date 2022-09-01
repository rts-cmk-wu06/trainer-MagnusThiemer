import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import FeaturedCard from "../components/FeaturedCard";
import H3 from "../components/H3";

const PopularClasses = () => {
  const [classes, setClasses] = useState();
  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/classes')
    .then(response => setClasses(response.data))
  }, [])
  console.log(classes)
  return ( 
    <section>
      {classes && <FeaturedCard data={classes[0]}/>}
      
      
      <H3 text='Classes for you'/>

    </section>
   );
}
 
export default PopularClasses;