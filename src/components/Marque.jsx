import React from 'react'
import Marquee from 'react-fast-marquee';
import { bakery, bakery2, bakery3, bakery4, bakery5 } from '../assets'

const Marque = () => {
  return (
    <div>
        <div className="py-6 flex flex-col gap-4 items-center justify-center">
            <p className="text-5xl font-[500] text-center font-kanit"
            style={{
                background: 'linear-gradient(to right, #9333EA, #362cfe)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent', 
                textDecoration: 'none',
                display: 'inline-block'
                  }}>
                Our Top Products
            </p>
            <div className="w-24 h-[6px] rounded-full" 
             style={{
                background: 'linear-gradient(to right, #fc9023, #fce723)',
                color: 'white',
                textDecoration: 'none',
                display: 'inline-block'
              }} ></div>
        </div>
      <div className=" pt-12 pb-6 ">
       <Marquee
         gradient
         speed={100}
         className={`overflow-hidden justify-between flex items-center`}>
         {[bakery2, bakery3, bakery4, bakery5, bakery2,bakery3,bakery4,bakery5,bakery,bakery3].map(
           (image, index) => (
             <div key={index} className="px-6">
                <img src={image} className=" h-20" alt={`image-${index}`} />
             </div>
           )
         )}
       </Marquee>
     </div>
    </div>
  )
}

export default Marque
