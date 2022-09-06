import { motion } from 'framer-motion'

const Spinner = (props) => {
  const spinTransition = {
    loop: Infinity,
    duration: 0.8,
    ease: 'easeInOut'
  }
  return ( 
    <div className={`relative h-12 w-12 ${props.className}`}>
      <motion.span 
        className='h-12 w-12 block border-t-8 border-x-8 border-b-8 border-x-transparent border-b-transparent border-t-primary rounded-full absolute top-0 left-0'
        animate={{rotate: 360}}
        transition={spinTransition}>
      </motion.span>
    </div>
   );
}
 
export default Spinner;