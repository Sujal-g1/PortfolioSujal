
import { useEffect, useState, useRef } from 'react'

const DURATION = 2400 // ms — cross + counter
const NAME_DURATION = 1700 // faster than the main loader

const Loader = ({ onComplete }) => {
  const [fill, setFill] = useState(false)
  const [exit, setExit] = useState(false)
  const [percent, setPercent] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setFill(true)

      const startedAt = performance.now()

      const tick = (now) => {
        const elapsed = now - startedAt
        const t = Math.min(elapsed / DURATION, 1)
        const eased = 1 - Math.pow(1 - t, 3)

        setPercent(Math.floor(eased * 100))

        if (t < 1) {
          rafRef.current = requestAnimationFrame(tick)
        } else {
          setPercent(100)
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    }, 350)

    const exitTimer = setTimeout(() => setExit(true), 3200)
    const completeTimer = setTimeout(() => onComplete(), 4100)

    return () => {
      clearTimeout(startTimer)
      clearTimeout(exitTimer)
      clearTimeout(completeTimer)

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [onComplete])

  return (
    <div
      className={`
        fixed inset-0 z-[9999]
        bg-black
        flex items-center justify-center
        overflow-hidden
        transition-opacity duration-1000
        ${exit ? 'opacity-0' : 'opacity-100'}
      `}
    >


{/* HUGE BACKGROUND NAME */}

<div
  className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
  style={{
    zIndex: 0
  }}
>
  <div
    transition-style="in:wipe:up"
    className="font-black uppercase whitespace-nowrap"
    style={{
      fontSize: 'clamp(120px, 25vw, 420px)',
      lineHeight: 0.8,
      letterSpacing: '-0.06em',
      color: '#F5F5F5',
      opacity: 0.075
    }}
  >
    SYRAXX
  </div>
</div>


      {/* =========================================================
          MAIN LOADER
          ========================================================= */}

      <div
        className={`
          relative
          z-10
          transition-transform
          duration-[1100ms]
          ease-[cubic-bezier(0.76,0,0.24,1)]
          ${exit ? 'scale-[6]' : 'scale-100'}
        `}
        style={{
          width: 'clamp(220px, 26vw, 380px)',
          height: 'clamp(220px, 26vw, 380px)'
        }}
      >

        {/* EMPTY CROSS */}

        <svg
          viewBox="0 0 240 240"
          className="absolute inset-0 w-full h-full"
        >
          <g opacity="0.14">
            <path
              d="
                M106 0
                C101.58 0 98 3.58 98 8
                V68

                C98 84.57 84.57 98 68 98
                H8

                C3.58 98 0 101.58 0 106
                V134

                C0 138.42 3.58 142 8 142
                H68

                C84.57 142 98 155.43 98 172
                V232

                C98 236.42 101.58 240 106 240
                H134

                C138.42 240 142 236.42 142 232
                V172

                C142 155.43 155.43 142 172 142
                H232

                C236.42 142 240 138.42 240 134
                V106

                C240 101.58 236.42 98 232 98
                H172

                C155.43 98 142 84.57 142 68
                V8

                C142 3.58 138.42 0 134 0
                Z
              "
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            />
          </g>
        </svg>


        {/* FILLED CROSS */}

        <div
          className="absolute inset-0"
          style={{
            clipPath: fill
              ? 'inset(0% 0 0 0)'
              : 'inset(100% 0 0 0)',
            transition:
              'clip-path 2200ms cubic-bezier(0.76, 0, 0.24, 1)'
          }}
        >
          <svg
            viewBox="0 0 240 240"
            className="w-full h-full"
          >
            <path
              d="
                M106 0
                C101.58 0 98 3.58 98 8
                V68

                C98 84.57 84.57 98 68 98
                H8

                C3.58 98 0 101.58 0 106
                V134

                C0 138.42 3.58 142 8 142
                H68

                C84.57 142 98 155.43 98 172
                V232

                C98 236.42 101.58 240 106 240
                H134

                C138.42 240 142 236.42 142 232
                V172

                C142 155.43 155.43 142 172 142
                H232

                C236.42 142 240 138.42 240 134
                V106

                C240 101.58 236.42 98 232 98
                H172

                C155.43 98 142 84.57 142 68
                V8

                C142 3.58 138.42 0 134 0
                Z
              "
              fill="#F5F5F5"
            />
          </svg>
        </div>


        {/* GRADIENT BLOB */}

        <div
          className="absolute"
          style={{
            width: 'clamp(44px, 15%, 70px)',
            height: 'clamp(44px, 15%, 70px)',
            right: '-6%',
            bottom: '16%'
          }}
        >

          {/* outline */}

          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
          >
            <circle
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="2"
            />
          </svg>


          {/* gradient */}

          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            style={{
              opacity: percent / 100,
              transition: 'opacity 150ms linear'
            }}
          >
            <defs>
              <linearGradient
                id="blobGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#FFB6A3"
                />

                <stop
                  offset="100%"
                  stopColor="#FFDCA8"
                />
              </linearGradient>
            </defs>

            <circle
              cx="50"
              cy="50"
              r="47"
              fill="url(#blobGrad)"
            />
          </svg>
        </div>


        {/* BUILD LABEL + COUNTER */}

        <div
          className="absolute flex items-center gap-3"
          style={{
            left: '6%',
            bottom: '-16%'
          }}
        >
          <span
            className="text-white/50 uppercase"
            style={{
              fontSize: 'clamp(11px, 1vw, 13px)',
              letterSpacing: '0.15em'
            }}
          >
            Build
          </span>

          <span
            className="text-white font-light tabular-nums"
            style={{
              fontSize: 'clamp(11px, 1vw, 13px)'
            }}
          >
            {percent}
          </span>
        </div>

      </div>

    </div>
  )
}

export default Loader

