import { useRef } from "react"
import AnimatedHeaderSection from "../components/AnimatedHeaderSection"
import AnimatedTextLines from "../components/AnimatedTextLines"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const About = () => {
    const imgRef = useRef(null)
    const text = `Passionate about clean architecture
    I build scalable, high-performance solutions 
    from prototype to production.`

     const aboutText = `I’m a Full-Stack Software Engineer who enjoys turning ideas into practical, reliable web applications. I work across the stack—from building polished React interfaces to designing APIs, databases, authentication systems, and real-time features.

I’m particularly interested in applications that solve real problems, whether that means building privacy-focused communication with real-time chat and WebRTC, integrating AI into healthcare workflows, or creating connected mobility experiences with live tracking and smart features.

When I’m not building:
⚡️ Experimenting with new technologies and ideas
🧠 Exploring AI, system design, and better ways to build software
💻 Working on side projects that challenge my engineering skills
🎨 Refining interfaces and interactions until they feel right
🚀 Learning, building, breaking things, and building them better`;
    useGSAP(()=>{
        gsap.to("#about",{
            scale: 0.95,
            scrollTrigger:{
                trigger:"#about",
                start:"bottom 80%",
                end:"bottom 20%",
                scrub:true,
                markers:false
            },
            ease:"power1.inOut"
        })

        gsap.set(imgRef,{
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" 
        })
        gsap.to(imgRef.current,{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" ,
        duration:2,
        ease:"power4.out",
        scrollTrigger:{
            trigger: imgRef.current
        }
        })
    })

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl ">
        <AnimatedHeaderSection 
        subTitle={"Code with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
        />
        <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl md:text-2xl lg:text-3xl font-light tracking-wide lg:flex-row text-white/60">
        <img 
        ref={imgRef}
        src="images/img.png" alt="sujal" 
        className="w-md rounded-3xl"/>
        <AnimatedTextLines 
        text={aboutText}
        className={`w-full`}
        />
        </div>

    </section>
  )
}

export default About