
export const scroll = () => {
    window.addEventListener('scroll',()=>{
        document.body.style.setProperty('scroll',window.pageYOffset/(document.body.offsetHeight-window.innerHeight))
    })
    const rotatingCard = document.querySelector('.card');

        console.log(rotatingCard)
        window.addEventListener('scroll',()=>{
        const scrollY = window.scrollY;
        const rotationValue = scrollY / 10; // You can adjust the speed of rotation here
        rotatingCard.style.transform = `rotateX((-1)*${rotationValue}deg) rotateY(${rotationValue}deg)`;

    })
    
}

export default scroll