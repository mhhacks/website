import Image from 'next/image'
// import DenverPhoto from '../photos/landing.jpeg'
import AnalyticsScript from './AnalyticsScript'
import Navbar from './Navbar'
import glitchStyles from '../styles/glitch.module.css'
import clsx from 'clsx'
import Button from './Button'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const bgImg = (
  <div
    className={clsx(
      'brightness-50 saturate-[1.6] absolute w-full h-full',
      glitchStyles.img
    )}
  />
)

const MouseEffect = () => {
  const [trigger, setTrigger] = useState(false)
  const [pos, setPos] = useState([-100, -100])

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos([
        e.pageX,
        e.pageY > window.innerHeight ? window.innerHeight : e.pageY,
      ])
    }

    const over = (e: any) => {
      console.log(e.target.classList)
      if (['button', 'a'].includes(e.target.tagName.toLowerCase()) || e.target.classList.contains('trigger-mouse')) setTrigger(true)
      else setTrigger(false)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  })

  const size = trigger ? 25 : 100

  return (
    <div
      style={{ left: pos[0], top: pos[1] }}
      className="absolute animate-spin-slow origin-center"
    >
      <div
        style={{ width: size, height: size }}
        className={clsx("transition-all pointer-events-none absolute rounded-full border border-dashed border-white -translate-x-1/2 -translate-y-1/2",
        trigger && 'bg-primary')}
      />
    </div>
  )
}

const Landing: React.FC = ({ children }) => {
  return (
    <div className={clsx('h-screen', glitchStyles.glitchContainer)}>
      <div className="absolute w-full h-full -z-20">
        {bgImg}
        {bgImg}
        {bgImg}
        {bgImg}
        {bgImg}
      </div>

      <MouseEffect />

      <div className="px-2 flex flex-col h-full items-center justify-center text-center gap-12 sm:gap-24 text-white">
        <h1
          className={clsx(
            'text-4xl md:text-7xl font-brand font-bold text-transparent bg-clip-text bg-white'
            // glitchStyles.text
          )}
        >
          Mile High Hacks
        </h1>

        <div className="flex items-center gap-8">
          <p className="max-w-md text-xl sm:text-[1.6rem] font-medium text-left">
            High schoolers: learn to code with 24 hours of fun, free food,
            workshops & prizes in <span className="location">Denver, CO</span>.
          </p>
          <div className="h-full border-l-2" />
          {/* <div className="mhh-date rounded-md px-3 py-1 border-2 border-white font-bold leading-none bg-gray-600 bg-opacity-50"> */}
          <div className="font-bold !leading-none text-sm sm:text-base">
            <div className="text-[3.6em] pb-2 border-b">Fall</div>
            <div className="text-[2.6em] my-2">2022</div>
          </div>
        </div>

        <Link href="/preregister">
          <a>
            <Button dark className="text-3xl font-heading">
              Preregister
            </Button>
          </a>
        </Link>

        <style jsx>{`
          .mhh-header {
            text-shadow: -4px 4px 0px rgba(255, 255, 255, 0.6);
          }

          .mhh-date {
            box-shadow: -4px 4px 0px rgba(255, 255, 255, 0.6);
          }

          .location {
            position: relative;
          }

          .location::after {
            position: absolute;
            content: '';
            //width: 100%;
            left: 0;
            right: 0;
            bottom: -1px;
            height: 40%;
            background: #bf2c34;
            z-index: -1;
            transition: cubic-bezier(0.4, 0, 0.2, 1) 150ms;
          }

          .location:hover::after {
            height: 100%;
            left: -1px;
            right: -1px;
          }
        `}</style>
      </div>
    </div>
  )
}

export default Landing
