import clsx from 'clsx'
import { selectRandom } from 'lib/util'
import { useEffect, useState, memo } from 'react'

const colors = [
  'bg-green-300',
  'bg-violet-300',
  'bg-blue-300',
  'bg-orange-300',
  'bg-red-300',
  'bg-pink-300',
  'bg-indigo-300',
  'bg-teal-300',
  'bg-purple-300',
]

const Dots: React.FC<{
  numDots?: number
  maxSize?: number
  animate?: boolean
}> = ({ numDots = 10, maxSize = 100, animate = true }) => {
  // const [dots, _setDots] = useState(new Array(numDots).fill(null).map(() => ({
  //   top: Math.random() * 100,
  //   left: Math.random() * 100,
  //   size: Math.random() * (maxSize - 30) + 30,
  //   color: selectRandom(colors),
  // })))

  const dots = new Array(numDots).fill(null).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * (maxSize - 30) + 30,
    color: selectRandom(colors),
  }))

  return (
    <div>
      {dots.map((d, i) => (
        <div
          key={i}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            animationDelay: `${Math.random() * 5}s`,
          }}
          className={clsx(
            'absolute rounded-full -z-10',
            animate && 'animate-pulsate',
            selectRandom(colors)
          )}
        />
      ))}
    </div>
  )
}

export default memo(Dots)
