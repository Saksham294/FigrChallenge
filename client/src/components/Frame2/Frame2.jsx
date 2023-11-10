import React, { useEffect,useState } from 'react'
import './Frame2.css'
import scroll from './scroll2.js'
import gsap from 'gsap'
import { motion,useScroll,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Frame2 = () => {

    const animate = useAnimation();
    let {scrollY}=useScroll()
    const { ref, inView } = useInView({
      threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            animate.start({
            rotateX: scrollY,
            transition: {
                type: "spring",
                duration: 1.5,
            },
            });
        }
        console.log(scrollY)
        if (!inView) {
            
        }
        }
        ,[inView,scrollY]);
   
   
    
    return (
        <div>
            <section className='frame2'>
                <div className="cardContainer">
                   <div className='rotatingCard'>
                   <motion.div className="card" animate={animate}>
                        <div ref={ref} className="slidebar">
                            Slide here to move the arrow
                            <img className='rightPointer' src='https://img.freepik.com/premium-vector/directional-arrow-vector-illustration_875240-735.jpg?w=996' >

                            </img>
                        </div>
                    </motion.div>
                   </div>
                </div>

            </section>
        </div>
    )
}

export default Frame2
