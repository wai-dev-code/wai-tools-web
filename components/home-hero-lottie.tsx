"use client"

import { useEffect, useRef, useState } from "react"
import Lottie, { type LottieRefCurrentProps } from "lottie-react"
import heroAnimation from "@/public/lottie/hero-developer.json"

interface HomeHeroLottieProps {
  className?: string
}

export function HomeHeroLottie({ className }: HomeHeroLottieProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onChange = () => setReduceMotion(mq.matches)
    onChange()
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    if (reduceMotion) {
      lottieRef.current?.goToAndStop(0, true)
    } else {
      lottieRef.current?.play()
    }
  }, [reduceMotion])

  return (
    <div
      className={className}
      aria-hidden
    >
      <div className="relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px]">
        <div
          className="pointer-events-none absolute inset-[8%] rounded-full bg-primary/15 blur-3xl"
          aria-hidden
        />
        <Lottie
          lottieRef={lottieRef}
          animationData={heroAnimation}
          loop={!reduceMotion}
          autoplay={!reduceMotion}
          className="relative h-full w-full drop-shadow-[0_20px_40px_oklch(0.55_0.19_250/0.15)]"
        />
      </div>
    </div>
  )
}
