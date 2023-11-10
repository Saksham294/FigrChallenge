import React, { useEffect } from 'react'
import './Frame5.css'
import animate from './animate'

const Frame5 = () => {

    useEffect(()=>{
        animate()
    },[])
    return (
        <div className='frame5'>
            <img className='layer' src={require('./pngwing.com.png')}>
            </img>
          
        </div>
    )
}

export default Frame5
