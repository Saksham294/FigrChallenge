import React, { useEffect } from 'react'
import './Frame3.css'
import {useInView} from 'react-intersection-observer'
import {motion,useAnimation} from 'framer-motion'

const Frame3 = () => {

    const animation=useAnimation()
    const animation2=useAnimation()
    const {ref, inView} = useInView({
        threshold: 0.5
    })

    useEffect(()=>
    {
        console.log(inView)
        if(inView){
            animation.start({
                y:-10,
                transition:{
                    type:'spring',
                    duration:1.5,
                }
            })
            animation2.start({
                y:-5,
                transition:{
                    type:'spring',
                    duration:1.5,
                    bounce:0.3,
                }
            })
        
        }
        if(!inView){
            animation.start({
                y:100,
            })
            animation2.start({
                y:100,
            })
        }


    },[inView])

    return (
       <>
        <h1 className='titleText'>A new easy<br></br> way to create.</h1>
        <div className='frame3' ref={ref}>
           
            <motion.div animate={animation} className="card1">

            </motion.div>
            <motion.div animate={animation2} className="card2">

            </motion.div>
            <motion.div animate={animation} className="card3">

            </motion.div>
        </div>
       </>
    )
}

export default Frame3
