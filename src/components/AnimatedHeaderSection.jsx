import { useRef, useEffect, useState } from 'react'
import AnimatedTextLines from './AnimatedTextLines'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const AnimatedHeaderSection = ({ subTitle, title, text, textColor, withScrollTrigger=false}) => {

    const contextRef = useRef(null)
    const headerRef = useRef(null)
    const [currentTime, setCurrentTime] = useState('')
    const [userLocation, setUserLocation] = useState('')

   useEffect(() => {
  // CURRENT TIME
  const updateTime = () => {
    const time = new Intl.DateTimeFormat(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).format(new Date())

    setCurrentTime(time)
  }
  updateTime()
  const timeInterval = setInterval(updateTime, 1000)

  // REAL USER LOCATION
  const getLocation = () => {

    if (!navigator.geolocation) {
      setUserLocation('ERROR')
      return
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        try {

          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`,
            {
              headers: {
                'Accept-Language': 'en'
              }
            }
          )

          const data = await response.json()

          const address = data.address

          const city =
            address.city ||
            address.town ||
            address.village ||
            address.municipality ||
            address.county

          const country = address.country

          if (city && country) {
            setUserLocation(
              `${city.toUpperCase()}`
            )
          } else if (city) {
            setUserLocation(city.toUpperCase())
          } else {
            setUserLocation('LOCATION FOUND')
          }

        } catch (error) {
          console.error('Reverse geocoding failed:', error)
          setUserLocation('LOCATION UNAVAILABLE')
        }
      },

      (error) => {
        console.error('Location permission/error:', error)

        setUserLocation('LOCATION OFF')
      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000
      }
    )
  }

  getLocation()

  // CLEANUP

  return () => {
    clearInterval(timeInterval)
  }

}, [])



        useGSAP(()=>{
            const tl = gsap.timeline({
                scrollTrigger:withScrollTrigger ?{
                    trigger:contextRef.current,   
                }: undefined 
            })
            tl.from(contextRef.current,{
                y:"50vh",
                duration:1,
                ease:"circ.out"
            })
            tl.from(headerRef.current,{
                y:"200",
                duration:1,
                ease:"circ.out"
            },"<+0.2") 
        },[])

  return (
     <div ref={contextRef}>

    <div style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        className="">
    <div
    ref={headerRef}
     className="flex flex-col justify-center gap-12 sm:gap-16 pt-16 ">

    <p className={`text-sm font-light tracking-[0.3rem] sm:tracking-[0.5rem] uppercase px-10 ${textColor}`}>{subTitle}</p> 

   <div className="flex items-end justify-between gap-6 sm:px-10 px-6 pb-2">

    <h1 className={`flex flex-col flex-wrap gap-12 ${textColor} uppercase banner-text-responsive sm:gap-16 md:block`}>{title}</h1>
    <div
  className={`
    shrink-0
    pb-2
    sm:pb-4
    ${textColor}
    font-light
    text-xs
    sm:text-sm
    tracking-[0.15em]
    tabular-nums
    flex
    items-center
    gap-3
  `}
>
  <span>{currentTime}</span>

  <span className="opacity-40">
    {userLocation}
  </span>
</div>

    </div>
     </div>
    </div>

    <div className={`relative px-10 ${textColor} `}>
    <div className="absolute inset-x-0 border-t-2"/>
    <div className="py-12 sm:py-16 text-end">
    <AnimatedTextLines text={text} className={`font-light uppercase value-text-responsive ${textColor} `} />
           
    </div>
    </div>

    </div>
  )
}

export default AnimatedHeaderSection