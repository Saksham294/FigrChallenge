import SplitType from 'split-type'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export const scroll = () => {
  const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((word) => {
  const text2 = new SplitType(word, { types: 'words' })

  gsap.from(text2.words,
      {
          scrollTrigger: {
              trigger: word,
              start: 'top 60%',
              end: 'bottom 50%',
              scrub: true,
              toggleActions: 'play play reverse reverse'
          },
          opacity: 0.2,
          stagger: 0.1,

      })
})
}

export default scroll