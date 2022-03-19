import clsx from 'clsx'

const SectionHeading: React.FC<{
  className?: string
  as?: string
  small?: boolean
}> = ({ children, as = 'h2', className, small }) => {
  const Comp: any = as
  return (
    <Comp
      className={clsx(
        'font-bold mb-8 text-center',
        small ? 'text-2xl pt-12' : 'text-[2.5rem] pt-20 text-co-blue',
        className
      )}
    >
      {children}
    </Comp>
  )
}

export default SectionHeading
