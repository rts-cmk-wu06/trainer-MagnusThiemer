import { useContext } from "react";
import ScheduleCard from "../components/ScheduleCard";
import { StateContext } from "../context/Context";

const ScheduleSection = () => {
  const { userData } = useContext(StateContext)

  return ( 
    <section className="p-6 flex flex-col gap-4">
      {userData.classes.map((item, index) => (
        <ScheduleCard data={item} key={index}/>
      ))}
    </section>
   );
}
 
export default ScheduleSection;