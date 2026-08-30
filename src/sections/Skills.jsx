import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillGroups } from "../constants";

gsap.registerPlugin(ScrollTrigger);



const Skills = () => {
  const sectionRef = useRef(null);
  const rowsRef = useRef([]);

  useGSAP(
    () => {
      const rows = rowsRef.current.filter(Boolean);

      gsap.from(rows, {
        y: 100,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      rows.forEach((row) => {
        const title = row.querySelector(".skill-title");
        const number = row.querySelector(".skill-number");

        row.addEventListener("mouseenter", () => {
          gsap.to(title, {
            x: 15,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(number, {
            color: "#D4AF37",
            duration: 0.3,
          });
        });

        row.addEventListener("mouseleave", () => {
          gsap.to(title, {
            x: 0,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(number, {
            color: "rgba(255,255,255,0.3)",
            duration: 0.3,
          });
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen px-5 py-24 overflow-hidden text-white bg-black sm:px-8 md:px-10 md:py-32"
    >
      {/* Header */}
      <div className="mb-20 md:mb-28">
        <p className="mb-4 text-sm tracking-[0.3em] uppercase text-white/40">
          What I work with
        </p>

        <h2 className="text-[15vw] leading-[0.8] tracking-tight font-light md:text-[10vw] uppercase">
          Skills<span className="text-gold">.</span>
        </h2>
      </div>

      {/* Skills */}
      <div className="border-t border-white/30">
        {skillGroups.map((group, index) => (
          <div
            key={group.number}
            ref={(el) => (rowsRef.current[index] = el)}
            className="
              group
              py-8
              border-b
              border-white/20
              md:py-10
            "
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">

              {/* Number */}
              <span
                className="
                  skill-number
                  text-sm
                  tracking-widest
                  text-white/30
                  transition-colors
                  duration-300
                  md:w-16
                "
              >
                {group.number}
              </span>

              {/* Category */}
              <div className="md:w-[28%]">
                <h3
                  className="
                    skill-title
                    text-3xl
                    font-light
                    transition-transform
                    duration-300
                    md:text-4xl
                    lg:text-5xl
                  "
                >
                  {group.title}
                </h3>
              </div>

              {/* Skills */}
              <div
                className="
                  flex
                  flex-wrap
                  gap-x-3
                  gap-y-2
                  text-lg
                  font-light
                  text-white/60
                  md:flex-1
                  md:text-xl
                  lg:text-2xl
                "
              >
                {group.skills.map((skill, skillIndex) => (
                  <span key={skill}>
                    {skill}
                    {skillIndex !== group.skills.length - 1 && (
                      <span className="ml-3 text-gold/60">/</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom statement */}
      <div className="flex justify-end mt-16">
        <p className="max-w-md text-base leading-relaxed tracking-wide text-right text-white/40 md:text-lg">
          Always learning, always building — with a focus on creating
          software that is useful, reliable, and enjoyable to use.
        </p>
      </div>
    </section>
  );
};

export default Skills;