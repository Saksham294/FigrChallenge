import React, { useEffect, useRef } from 'react'
import './Frame4.css'
import SplitType from 'split-type'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import scroll from './scroll'

const Frame4 = () => {
    const text = "In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold"

    const lenis = new Lenis()

    lenis.on('scroll', (e) => {

    })

    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)


    gsap.registerPlugin(ScrollTrigger);
    const splitTypes = document.querySelectorAll('.reveal-type')

    //trigger gsap animation on scroll
    
    useEffect(()=>{
        console.log("Mounted")
        scroll()
    },[gsap,ScrollTrigger])

    return (
        <>
            <section className='textreveal_section'>
                <div className="container">
                    <div className="textreveal_wrapper">
                        <div className="textreveal_sticky">
                            <div className="text-container">
                                <div className="reveal">
                                    <p className='reveal-type'>
                                        {text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>




        </>
    )
}

export default Frame4


// const [lettersRef, setlettersRef] = useArrayRef();
//     const triggerRef = useRef(null)


//     function useArrayRef() {
//         const lettersRef = useRef([]);
//         lettersRef.current = [];
//         return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
//     }

//     gsap.registerPlugin(ScrollTrigger);
//     const text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nostrum inventore at atque, sunt iste dicta! Odio fugit aut culpa reiciendis veniam repellendus iure obcaecati explicabo? Sunt voluptatum vero consequatur!"

//     useEffect(() => {
//         const anim = gsap.to(
//             lettersRef.current,
//             {
//                 scrollTrigger: {
//                     trigger: triggerRef.current,
//                     scrub: true,
//                     start: "top left",
//                     end: "bottom "

//                 },
//                 color: "#FFFFFF",
//                 duration: 1,
//                 stagger: 10,
//             }
//         );
//         return (() => {
//             anim.kill()
//         })
//     }, []);