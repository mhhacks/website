import Image from 'next/image'
// import DenverPhoto from '../photos/landing.jpeg'
import AnalyticsScript from './AnalyticsScript'
import Navbar from './Navbar'
import glitchStyles from '../styles/glitch.module.css'
import clsx from 'clsx'
import Button from './Button'
import Link from 'next/link'

const bgImg = (
  <div
    className={clsx(
      'brightness-50 saturate-[1.6] absolute w-full h-full',
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
          workshops & prizes in <span className="location">Denver, CO</span>.
        </p>

        <div className="mhh-date rounded-md px-3 py-1 border-2 border-white font-bold leading-none bg-gray-600 bg-opacity-50">
          <div className="text-[3.6rem]">Fall</div>
          <div className="text-[2.6rem] my-2">2022</div>
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
