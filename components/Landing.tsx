import Image from 'next/image'
// import DenverPhoto from '../photos/landing.jpeg'
import AnalyticsScript from './AnalyticsScript'
import Navbar from './Navbar'
import glitchStyles from '../styles/glitch.module.css'
import clsx from 'clsx'
import Button from './Button'
import Link from 'next/link'

// const image = <Image
// layout="responsive"
// src={DenverPhoto}
// alt="Hackers work on their projects at MAHacks 2019"
// priority
// quality={30}
// objectFit="cover"
// objectPosition={'center'}
// className={clsx('brightness-50', glitchStyles.img)}
// />

const bgImg = (
  <div
    className={clsx(
      'brightness-50 saturate-[1.5] absolute w-full h-full',
      glitchStyles.img
    )}
  />
)

const Landing: React.FC = ({ children }) => {
  return (
    <div className={clsx('h-screen', glitchStyles.glitchContainer)}>
      <div className="absolute w-full h-full z-[-1]">
        {bgImg}
        {bgImg}
        {bgImg}
        {bgImg}
        {bgImg}
      </div>

      <div className="flex flex-col h-full items-center justify-center text-center gap-8 text-white">
        <h1
          className={clsx(
            'text-7xl font-bold mhh-header py-2',
            glitchStyles.text
          )}
        >
          Mile High Hacks
        </h1>

        <p className="max-w-md text-2xl font-medium">
          High schoolers: learn to code with 24 hours of fun, free food,
          workshops & prizes in Denver, CO.
        </p>

        <div className="rounded-md px-3 py-1 border-2 border-white font-bold leading-none backdrop-blur-sm">
          <div className="text-[1.7rem]">November</div>
          <div className="text-[3.1rem]">19-20</div>
        </div>

        <Link href="/register">
          <a>
            <Button className="text-2xl font-heading">Register Now</Button>
          </a>
        </Link>

        <style jsx>{`
          .mhh-header {
            text-shadow: -4px 4px 0px rgba(255, 255, 255, 0.6);
          }
        `}</style>
      </div>
    </div>
  )
}

export default Landing
