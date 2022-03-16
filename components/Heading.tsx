import clsx from 'clsx'

const Heading: React.FC<{
  className?: string
  as?: string
  small?: boolean
}> = ({ children, as = 'h2', className, small }) => {
  const Comp: any = as
  return (
    <Comp
      className={clsx(
        className,
        'font-bold mb-8 text-center',
        small ? 'text-2xl pt-12' : 'text-4xl pt-20 text-co-blue'
      )}
    >
      {children}
    </Comp>
  )
}

export default Heading
