import { motion } from "framer-motion"
import  React, { useEffect} from 'react'
import  {useLocation} from 'react-router-dom'
function NoPage() {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo( 0,0)
  }, [location])
  return (
    <motion.section className='h-[45rem] w-full bg-slate-600 relative'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opcaity:0}}    >
      <div className='absolute top-[20%] left-[25%] sm:left-[40%] max-w-[1400px] flex items-center  mt-[10rem]'>
      <h1 className='text-3xl font-bold text-white text-center'>Error 404 :No Page Found</h1>
      </div>
     
    </motion.section>
  )
}

export default NoPage
