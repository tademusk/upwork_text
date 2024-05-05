import { motion } from 'framer-motion';
import React, { useState } from 'react';
import videopic from '../assets/banner.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import forward from '../assets/forward.png';
import back from '../assets/back.png';

const NewSlider = () => {
    const [positionindexs, setPositionindexs] = useState([0, 1, 2, 3, 4]);

    const handleNext = () => {
        setPositionindexs(prev => {
            return prev.map(prev => (prev + 1) % 5);
        });
    };

    const handlePrev = () => {
        setPositionindexs(prev => {
            return prev.map(prev => (prev - 1 + 5) % 5);
        });
    };

    const images = [videopic, image2, image3, image4, image5];
    const positions = ['center', 'left1', 'left', 'right', 'right1'];
    const imageVariants = {
        center: { x: '0%', scale: 1.1, zIndex: 5},
        left1: { x: '-55%', scale: 0.8, zIndex: 2,},
        left: { x: '-95%', scale: 0.6, zIndex: 1 },
        right: { x: '95%', scale: 0.6, zIndex: 1 },
        right1: { x: '55%', scale: 0.8, zIndex: 2 },
    };

    return (
        <div className='flex items-center flex-col justify-center w-full h-full' style={{ perspective: '1000px' }}>
            {images.map((image, index) => (
                <div className=' rounded-full'> 
                     <motion.img
                       key={index}
                       src={image}
                       alt={image}
                       className='rounded-[8px] object-fill top-[5%] left-[30%]'
                       initial='center'

                    //    initial = "{{ opacity: .6}}"
                    //    whileInView={{ opacity: 1}}

                       transition={{duration: 0.7}}
                       animate={positions[positionindexs[index]]}
                       variants={imageVariants}
                       
                    //    transition={{ duration: 0.8}}
                       style={{ width: '40%', position: 'absolute',  transform: 'rotate(90deg)' }}
                      />

                    <div className='flex justify-between items-center z-10 fixed top-[33%] left-[24%] w-[52%]'>
                        <img src={back} alt="back" className='z-10 w-26 h-28 cursor-pointer' onClick={handlePrev} />
                        <img src={forward} alt="forward" className='z-10 w-28 h-28 cursor-pointer' onClick={handleNext} />
                    </div>

                </div>
                
            ))}
        </div>
    );
};

export default NewSlider;
