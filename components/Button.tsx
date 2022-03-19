import clsx from 'clsx'
import { MouseEventHandler } from 'react'

const Button: React.FC<{
  type?: 'submit'
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  dark?: boolean
}> = ({ children, type = 'button', onClick, className, dark }) => {
  return (
    <button
      type={type as any}
      className={clsx(
        'border-2 rounded-md p-3 font-semibold text-xl hover:scale-[103%] focus:scale-[103%] focus:ring-2 ring-offset-2 ring-offset-co-yellow ring-black transition-all outline-none',
        dark ? 'bg-black bg-opacity-50 border-white' : 'border-black',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
