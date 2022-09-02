import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ClassHeader from '../components/ClassHeader';
import ClassInfo from '../components/ClassInfo';

const ClassSection = () => {
  const [classData, setClassData] = useState()
  let { id } = useParams()
  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/classes/${id}`)
    .then(response => setClassData(response.data))
  }, [])

  return ( 
    (classData && 
      <section>
        <ClassHeader data={classData}/>
        <ClassInfo data={classData}/>
      </section>
    )
   );
}
 
export default ClassSection;