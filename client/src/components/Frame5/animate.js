
export const animate = () => {
    const parallax=document.querySelector('.layer')

    parallax.addEventListener('mousemove', (e) => {
        const x=e.clientX
        const y=e.clientY
        console.log(x,y)
        //rotatex too
        parallax.style.transform=`translate(${x/50}px,${y/50}px) rotateX(${y/50}deg)`


    })


}

export default animate