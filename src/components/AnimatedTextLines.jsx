import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import  { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const AnimatedTextLines = ({ text, className }) => {

    const containerRef = useRef(null)
    const lineRef = useRef([])
    const lines = text.split("\n").filter((line) => line.trim() !== "")

    useGSAP(()=>{
       if(lineRef.current.length > 0){
        gsap.from(lineRef.current,{
            y:100,
            opacity:0,
            duration:1,
            stagger:0.3,
            ease:"back.out",
            scrollTrigger:{
                trigger: containerRef.current
            }
        })
       }
    })


  return (
    <div 
    ref={containerRef}
    className={className}
    >
    {lines.map((line, idx)=>(
     <span
     key={idx}
     ref={(ele)=>(lineRef.current[idx]= ele)}
     className='block text-xl  leading-relaxed tracking-1 text-pretty'>
      {line}</span>  
    ))}  
    </div>
  )
}

export default AnimatedTextLines