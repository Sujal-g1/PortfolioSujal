import { useGSAP } from "@gsap/react"
import AnimatedHeaderSection from "../components/AnimatedHeaderSection"
import Marquee from "../components/Marquee"
import { socials } from "../constants"
import gsap from "gsap"


const Contact = () => {

    const text =  `Have a question or a project idea? 
    I’d love to hear from you and discuss how we can bring it to life!
    `
    const items = [
    "just imagine, I code",
    "just imagine, I code",
    "just imagine, I code",
    "just imagine, I code",
    "just imagine, I code"
    ]

    useGSAP(()=>{
    gsap.from(".social-link",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:1,
        stagger:0.3,
        ease:"back.out",
        scrollTrigger:{
        trigger:".social-link"
        }
    })
    },[])

  return (
    <section
    id="contact"
     className="flex flex-col justify-between min-h-screen bg-black">

    <div>
    <AnimatedHeaderSection 
        subTitle={"You Dream It, I Code It"}
        title={"Contact"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
    />

    <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">  

    <div className="flex flex-col w-full gap-10">

    <div className="social-link">
        <h2>E-mail</h2>
        <div className="w-full h-px my-2 bg-white/30"/>
        <a className="text-xl tracking-widest lowercase text-pretty"
        href="mailto:sujal.work2005@gmail.com">
        sujal.work2005@gmail.com
        </a>
    </div>

    <div className="social-link">
    <h2>Social Media</h2>
    <div className="w-full h-px my-2 bg-white/30"/>

    <div className="flex flex-wrap gap-2">
    {socials.map((social, idx)=>(
     <a key={idx}
     href={social.href}
     className="text-xs leading-loose tracking-widest uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
     >
        {"{ "}
        {social.name}
        {" }"}
     </a>
    ))}
    </div>

    </div>

     {/* Resume */}
            <div className="social-link">
              <h2>Resume</h2>

              <div className="w-full h-px my-2 bg-white/30" />

              <a
                href="/resume.pdf"
                download="Sujal-Garg-Resume.pdf"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-5
                  py-3
                  mt-2
                  text-sm
                  tracking-widest
                  text-black
                  transition-all
                  duration-300
                  bg-white
                  border
                  border-transparent
                  rounded-full
                  hover:bg-black
                  hover:scale-105
                  hover:text-white
                  hover:border-white
                "
              >
                Download Resume
                <span className="text-lg">↓</span>
              </a>
            </div>


    </div>
    </div>

    </div>

    <Marquee items={items}
    className="text-white bg-transparent"/>

    </section>
  )
}

export default Contact