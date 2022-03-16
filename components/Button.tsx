import clsx from 'clsx'
import { MouseEventHandler } from 'react'

const Button: React.FC<{
  type?: 'submit'
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
}> = ({ children, type = 'button', onClick, className }) => {
  return (
    <button
      type={type as any}
      className={clsx(
        'bg-black bg-opacity-50 border-2 border-white rounded-md p-3 font-semibold text-xl hover:scale-[102%] transition-all',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
