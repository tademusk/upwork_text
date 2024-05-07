import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import styles from './style'
import Marque from "./components/Marque"
import React, { useEffect, useState } from "react"
import Demonstrate from "./components/Demonstrate"

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3300); 
  }, []);

  return (
    <>
    {
      loading ? (
        <div id="js-preloader" className="js-preloader">
          <div className="preloader-inner">
            <span className="dot"></span>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      ) : (

        <div className='w-[100vw] higher font-kanit'>
        <section className={` ${styles.flexCenter} ${styles.paddingNav}`}>
             <div className={`${styles.boxWidth} pt-[25px]`}>
                <Navbar />
             </div>   
         </section>
         <section className={` ${styles.flexCenter} ${styles.paddingNav}`}>
             <div className={` ${styles.boxWidth} py-5  h-[450px]`}>
               <Banner />
             </div>   
         </section>
         <section className={` ${styles.flexCenter} ${styles.paddingNav} `}>
             <div className={` ${styles.boxWidth} pt-5 pb-20 `}>
               <Marque />
             </div>   
         </section>
         <section className={` ${styles.flexCenter}  relative bgDemonstarte `}>
             <div className={` ${styles.boxWidth} ${styles.paddingNav} py-5 `}>
               <Demonstrate />
             </div>   
         </section>
         <section className={` ${styles.flexCenter}  `}>
             <div className={` ${styles.boxWidth} ${styles.paddingNav} pt-16 `}>
              <Marque />
             </div>   
         </section>
        </div>
      )
    }
</> )
}