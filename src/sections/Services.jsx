import { useRef } from "react"
import AnimatedHeaderSection from "../components/AnimatedHeaderSection"
import { servicesData  } from "../constants"
import { useGSAP } from "@gsap/react"
import { useMediaQuery } from "react-responsive"
import gsap from "gsap"


const Services = () => {
    const serviceRef = useRef([])
    const isDesktop = useMediaQuery({minWidth : "48rem"}) //768px
    const text = `I make creative websites that feels real`

    useGSAP(()=>{
        serviceRef.current.forEach((el)=>{
            if(!el) return;
            gsap.from(el,{
                y:200,
                scrollTrigger:{
                    trigger:el,
                    start:"top 80%"
                },
                duration:1,
                ease:"circ.out"
            })
        })
    },[ ])
 
  return (
    <section className='min-h-screen bg-black rounded-t-4xl' id='services'>
        
    <AnimatedHeaderSection
    subTitle={"Behind the Screen, Beyond the Scene"}
    title={"Service"}
    text={text}
    textColor={"text-white"}  
    withScrollTrigger={true}/>

    {servicesData.map((service, idx)=>(
        <div ref={(ele)=> (serviceRef.current[idx]= ele)} key={idx}
        className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30 "
        style={ isDesktop ?{top:`calc(10vh + ${idx*5}em)`,
            marginBottom:`${(servicesData.length - idx-1)*5}rem`,
        }: {top:0}}
        >

        <div className="flex items-center justify-between gap-4 font-light">
        <div className="flex flex-col gap-6">
        <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
        <p className="text-xl tracking-widest leading-relaxed lg:text-2xl text-white/60 text-pretty">{service.description}</p>
        <div className="flex flex-col gap-2 sm:gap-4 text-2xl lg:text-3xl text-white/80">
        {service.items.map((item, itemIdx)=>(
        <div key={`item-${idx}-${itemIdx}`}>
        <h3 className="flex">
        <span className="mr-12 text-white/30 text-lg">0{itemIdx+1}</span>
        {item.title}
        </h3>
        {/* <p className="ml-16 mt-2 text-base lg:text-lg text-white/50"> {item.description} </p> */}
        {itemIdx < service.items.length -1 && (
        <div className="w-full h-px my-2 bg-white/30" /> )}
        </div>
        ))}
        </div>
        </div>
        </div>

        </div>
    ))}

    </section>
  )
}

export default Services