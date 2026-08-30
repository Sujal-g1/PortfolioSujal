
import { useState, useRef } from "react"
import AnimatedHeaderSection from "../components/AnimatedHeaderSection"
import { projects } from "../constants"
import { Icon } from "@iconify/react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const Works = () => {
  const [currentIdx, setCurrentIdx] = useState(null)

  const previewRef = useRef(null)
  const moveX = useRef(null)
  const moveY = useRef(null)

  const mouse = useRef({ x: 0, y: 0 })

  const projectRefs = useRef([])
  const descriptionRefs = useRef([])

  const text = `Featured projects that have been meticulously
  crafted with passion to drive
  results & impact`

  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    })

    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    })

    gsap.from("#project", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project",
      },
    })
  })

  const handleMouseEnter = (idx) => {
    if (window.innerWidth < 768) return

    setCurrentIdx(idx)

    const project = projectRefs.current[idx]
    const description = descriptionRefs.current[idx]

    if (!project || !description) return

    // Expand project tab
    gsap.to(project, {
      paddingTop: 24,
      paddingBottom: 24,
      duration: 0.4,
      ease: "power3.out",
    })

    // Show description
    gsap.fromTo(
      description,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        delay: 0.1,
        ease: "power3.out",
      }
    )

    // Show preview image
    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  const handleMouseLeave = (idx) => {
    if (window.innerWidth < 768) return

    const project = projectRefs.current[idx]
    const description = descriptionRefs.current[idx]

    if (!project || !description) return

    // Hide description
    gsap.to(description, {
      opacity: 0,
      y: 20,
      duration: 0.2,
      ease: "power2.in",
    })

    // Shrink project tab
    gsap.to(project, {
      paddingTop: 20,
      paddingBottom: 20,
      duration: 0.4,
      ease: "power3.inOut",
    })

    // Hide preview
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
    })

    setCurrentIdx(null)
  }

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return

    mouse.current.x = e.clientX + 24
    mouse.current.y = e.clientY + 24

    moveX.current(mouse.current.x)
    moveY.current(mouse.current.y)
  }

  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle="Logic meets Aesthetics, Seamlessly"
        title="Works"
        text={text}
        textColor="text-black"
        withScrollTrigger={true}
      />

      <div
        className="relative flex flex-col font-light"
        onMouseMove={handleMouseMove}
      >
        {projects.map((project, idx) => (
          <a
            key={project.id}
            id="project"
            ref={(el) => (projectRefs.current[idx] = el)}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex flex-col gap-4 py-5 cursor-pointer group"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
          >
            {/* Hover background */}
            <div className="absolute inset-0 bg-black -z-10 opacity-0 transition-opacity duration-300 md:group-hover:opacity-100" />

            {/* Title */}
            <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
              <h2 className="lg:text-[32px] text-[26px] leading-none">
                {project.name}
              </h2>

              <Icon
                icon="lucide:arrow-up-right"
                className="md:size-6 size-5"
              />
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 bg-black/80" />

            {/* Frameworks */}
            <div className="flex px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
              {project.frameworks.map((framework) => (
                <p
                  key={framework.id}
                  className="text-black transition-colors duration-500 md:group-hover:text-white"
                >
                  {framework.name}
                </p>
              ))}
            </div>

            {/* Description */}
            <div
              ref={(el) => (descriptionRefs.current[idx] = el)}
              className="px-10 pt-4 md:px-12 md:max-w-3xl"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
              }}
            >
              <p className="text-base leading-relaxed text-white/70 lg:text-xl">
                {project.description}
              </p>
            </div>

            {/* Mobile preview */}
            <div className="relative flex flex-col items-center justify-center px-10 md:hidden h-[400px]">
              <img
                src={project.image}
                alt={`${project.name}-image`}
                className="absolute object-cover w-full h-full px-14 rounded-xl"
              />

              <p className="absolute bottom-6 px-10 text-sm text-white">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Desktop floating preview image */}
      <div
        ref={previewRef}
        className="fixed -top-2/6 left-0 z-50 hidden overflow-hidden border-8 border-black pointer-events-none w-240 md:block opacity-0"
      >
        {currentIdx !== null && (
          <img
            src={projects[currentIdx].image}
            alt={`${projects[currentIdx].name} preview`}
            className="object-cover w-full h-full"
          />
        )}
      </div>
    </section>
  )
}

export default Works

