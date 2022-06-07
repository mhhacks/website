import clsx from 'clsx'
import Link from 'next/link'
import { useLayoutEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from '@hackclub/icons'
import Logo from './Logo'
import { useRouter } from 'next/router'

const navItems = {
  'How It Works': '/#how-it-works',
  Sponsors: '/#sponsors',
  Team: '/#team',
  FAQ: '/#faq',
  Register: '/preregister',
}

const Navbar: React.FC<{}> = ({}) => {
  const router = useRouter()
  const [isAtTop, setAtTop] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useLayoutEffect(() => {
    const scrollListener = () => {
      const pos = window.scrollY
      setAtTop(pos < 10)
    }

    const resizeListener = () => {
      // If window is bigger than sm breakpoint open the menu
      setIsMobile(window.innerWidth < 640)
      setMenuOpen(window.innerWidth >= 640)
    }

    scrollListener()
    resizeListener()

    const clickListener = () => {
      if (window.innerWidth < 640) setMenuOpen(false)
    }

    window.addEventListener('scroll', scrollListener)
    window.addEventListener('resize', resizeListener)
    window.addEventListener('touchend', clickListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
      window.removeEventListener('resize', resizeListener)
      window.removeEventListener('touchend', clickListener)
    }
  }, [])

  return (
    <div
      className={clsx(
        'fixed top-0 w-full z-40 transition-all border-slate-300',
        !isAtTop && 'border-b bg-bg-card',
        isAtTop && menuOpen && 'bg-bg-card sm:bg-transparent'
      )}
    >
      <div
        className={clsx(
          'flex flex-col sm:flex-row sm:items-center gap-3 md:gap-7 max-w-6xl mx-auto px-8 transition-all',
          isAtTop ? 'py-7' : 'py-5'
        )}
      >
        <div className="flex items-center">
          <Link href={'/#'} scroll={true}>
            <a className='text-xl font-black tracking-wider'>
              {/* <Logo /> */}
              MHH.
            </a>
          </Link>

          <div className="flex-grow" />

          <button className="sm:hidden" onTouchEnd={(e) => e.stopPropagation()}>
            <Icon
              glyph="menu"
              // className={clsx(isAtTop && !menuOpen && 'text-white')}
              size={24}
              onClick={() => setMenuOpen((o) => !o)}
            />
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <>
              <div className="flex-1" />
              {Object.entries(navItems).map(([name, href], i) => (
                <motion.div
                  key={name}
                  initial={
                    isMobile && {
                      x: -40,
                      opacity: 0,
                    }
                  }
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  exit={{
                    y: 30,
                    opacity: 0,
                  }}
                >
                  <Link href={href}>
                    <a
                      className={clsx(
                        'font-medium transition-all',
                        i === Object.entries(navItems).length - 1 && 'border-2 border-black p-2 rounded-md hover:bg-black hover:bg-opacity-10'
                      )}
                    >
                      {name}
                    </a>
                  </Link>
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Navbar
