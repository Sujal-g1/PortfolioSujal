import { useRef } from "react"
import AnimatedTextLines from "../components/AnimatedTextLines"
import Planet from "../components/Planet"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Canvas } from "@react-three/fiber"
import { Environment, Float, Lightformer } from "@react-three/drei"
import { useMediaQuery } from "react-responsive"
import AnimatedHeaderSection from "../components/AnimatedHeaderSection"



const Hero = () => {

    const isMobile = useMediaQuery({maxWidth:853})
    const text = `I make creative websites that feels real`
 
  return (

    <section 
    id="home"
    className='flex flex-col justify-end min-h-screen'>
        {/* name + intro */}
    <AnimatedHeaderSection 
    subTitle={"404 No Bugs Found"}
    title={"Sujal Garg"}
    text={text}
    textColor={"text-black"}/>

        {/* 3dmodel */}
    <figure className="absolute inset-0 -z-50" style={{ width:"100vw", height:"100vh"}}>
    
    <Canvas shadows camera={{ position:[0,0, -10], fov:17.5, near:1, far:20 }}>
        <ambientLight intensity={0.5}/>
        <Float speed={0.8}>
        <Planet scale={isMobile? 0.5: 1}/>
        </Float>
        <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
            <Lightformer form={"circle"} intensity={2} position={[0, 5, -9]}
            scale={10}/>
            <Lightformer form={"circle"} intensity={2} position={[0, 3, 1]}
            scale={10}/>
            <Lightformer form={"circle"} intensity={2} position={[ -5, -1, -1]}
            scale={10}/>
            <Lightformer form={"circle"} intensity={2} position={[10, 1, 0]}
            scale={16}/>
            </group>
        </Environment>
    </Canvas>
          
    </figure>
          
    </section>
  )
}

export default Hero