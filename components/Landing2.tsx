import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import SkylineImage from 'photos/skyline_overlay.png'

const Landing: React.FC = ({ children }) => {
  return (
    <div
      className={clsx(
        'relative h-screen bg-gradient-to-b from-landing-g1 to-landing-g2 overflow-clip'
      )}
    >
      <div className="flex flex-col items-center p-4">
        <div className="flex flex-col justify-center mx-auto gap-8 py-24">
          <div>
          <div className="font-extrabold text-lg">
            Fall 2022 • Denver, CO
          </div>
          <div className="mhh-heading font-brand text-6xl md:text-[5rem] leading-tight">
            Mile High Hacks
          </div></div>
          {/* TODO fix text scaling here */}
          <div className="font-secondary text-2xl max-w-[40rem]">
            High schoolers: learn to code with 24 hours of fun, free food,
            workshops & prizes in Denver, CO.
          </div>
          <div className="text-center">
            <Link href="/register">
              <a className="font-secondary text-3xl underline underline-offset-4">
                Preregister Now
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className='skyline-overlay-container'>
        <Image quality={100} placeholder='empty' objectFit='cover' src={SkylineImage} alt="Denver" />
      </div>

      <style jsx global>{`
        .mhh-heading {
          text-shadow: -4px 4px 0px rgba(255, 255, 255, 0.6);
        }

        .skyline-overlay-container {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 50%;
          pointer-events: none;
        }

        .skyline-overlay-container > span {
          width: 100%;
          height: 100% !important;
        }
      `}</style>
    </div>
  )
}

export default Landing
