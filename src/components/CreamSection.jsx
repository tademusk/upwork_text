import React from 'react'
import { creampng } from '../assets'
import { motion } from 'framer-motion'

const CreamSection = () => {
  return (
    <>
     <div className='flex flex-col w-full items-center justify-center'>
        
        <h2 className="text-5xl tracking-wide leading-[50px] font-[500]  py-4"
             style={{
                 background: 'linear-gradient(to right, #9333EA, #362cfe)',
                 WebkitBackgroundClip: 'text',
                 WebkitTextFillColor: 'transparent', 
                 textDecoration: 'none',
                 display: 'inline-block'
                   }}>
                 The best in the city
             </h2>
             <div className="w-24 h-[6px] rounded-full" 
              style={{
                 background: 'linear-gradient(to right, #fc9023, #fce723)',
                 color: 'white',
                 textDecoration: 'none',
                 display: 'inline-block'
               }} ></div>   
           </div>
   
    <motion.div className='px-8 py-4 gap-10 flex items-center justify-center'>
         <motion.div
        initial={{ translateX: -500, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }} 
        className="w-[50%] pt-8">
          <img src={creampng} className='w-full p-8' alt="" />
       </motion.div>
       <motion.div
        animate={{ translateX: 0, opacity: 1}}
        initial={{ translateX: 500, opacity: 0 }}
        transition={{ duration: 0.7, delay: 1 }} 
       className="w-[50%] flex flex-col gap-10">
       
            <p className=' text-black/70 tracking-wide leading-8'>Experience the convenience of having your favorite items delivered right to your doorstep. Our dedicated delivery team ensures timely and secure delivery, so you can enjoy your purchases without any hassle. Whether it's groceries, meals, or essentials.</p>
            <p className=' text-black/70 tracking-wide leading-8'>Experience the convenience of having your favorite items delivered right to your doorstep. Our dedicated delivery team ensures timely and secure delivery, so you can enjoy your purchases without any hassle.</p>
            <p className=' text-black/70 tracking-wide leading-8'>Experience the convenience of having your favorite items delivered right to your doorstep. Our dedicated delivery team ensures timely and secure delivery, so you can enjoy your purchases without any hassle.</p>

       </motion.div>
      
    </motion.div>
    </>
  )
}

export default CreamSection
