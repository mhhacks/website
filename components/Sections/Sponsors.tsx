import Image from 'next/image'

const primarySponsors: any[] = []

const Grid: React.FC<{
  sponsors: Array<{
    img: StaticImageData
    name: string
    url: string
  }>
}> = ({ children, sponsors }) => (
  <div className="my-8 grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-6">
    {sponsors.map((s) => (
      <a
        key={s.name}
        className=""
        href={s.url}
        target={'_blank'}
        rel="noreferrer"
      >
        <div className="h-full next-image-full-height">
          <Image
            src={s.img}
            alt={s.name}
            height={150}
            objectFit="contain"
            objectPosition={'center center'}
          />
        </div>
      </a>
    ))}
  </div>
)

const Sponsors = () => {
  return (
    <>
      <Grid sponsors={primarySponsors} />
    </>
  )
}

export default Sponsors
