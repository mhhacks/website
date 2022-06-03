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
        !isAtTop && 'border-b bg-white',
        isAtTop && menuOpen && 'bg-white sm:bg-transparent'
      )}
    >

      <div
        className={clsx(
          'flex flex-col sm:flex-row sm:items-center gap-3 md:gap-7 max-w-6xl mx-auto px-8 transition-all',
          isAtTop ? 'py-4' : 'py-2'
        )}
      >
        <div className="flex items-center">
          <Link href={'/#'} scroll={true}>
            <a>
              <Logo />
            </a>
          </Link>

          <div className="flex-grow" />

          <button className="sm:hidden" onTouchEnd={(e) => e.stopPropagation()}>
            <Icon
              glyph="menu"
              className={clsx(isAtTop && !menuOpen && 'text-white')}
              size={24}
              onClick={() => setMenuOpen((o) => !o)}
            />
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <>
              <div className="flex-1" />
              {Object.entries(navItems).map(([name, href]) => (
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
                        'font-semibold',
                        isAtTop && router.pathname === '/' && !isMobile && 'text-white'
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
