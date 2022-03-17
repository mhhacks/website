import clsx from 'clsx'
import Image from 'next/image'
import Benjamin from 'photos/team/benjamin2.png'
import Kunal from 'photos/team/kunal.jpeg'

const Person = ({ name, role, pronouns, image, link }: any) => {
  return (
    <div className="flex flex-col gap-1">
      <Image
        src={image}
        alt={name}
        width={240}
        height={240}
        className='rounded-sm'
        objectFit="cover"
        objectPosition={'center'}
      />
      <div className="flex flex-col">
        <a href={link} target={'_blank'} rel="noreferrer">
          <h4
            className={clsx(
              'm-0 font-primary font-bold text-lg border-b border-transparent border-dashed',
              link && 'hover:border-primary hover:text-primary'
            )}
          >
            {name}
            {/* <span className="text-gray-500 font-light text-xs">{pronouns}</span> */}
          </h4>
        </a>
        <p className="text-gray-600 text-xs">
          {role}
          {/* <br/>{pronouns} */}
        </p>
        {/* <a><Icon glyph='web' /></a> */}
      </div>
    </div>
  )
}

const Grid: React.FC = ({ children }) => (
  <div className="grid gap-4 grid-cols-2 md:grid-cols-4 grid-flow-row">
    {children}
  </div>
)

const Team: React.FC = () => {
  return (
    <>
      <Grid>
        <Person
          name="Benjamin Ashbaugh"
          role="Lead Organizer"
          pronouns="he/him"
          image={Benjamin}
        />
        <Person
          name="Sam Sterritt"
          role="Outreach & Marketing"
          pronouns="she/her"
          image={Benjamin}
        />
        <Person
          name="JP Keranne"
          role="Outreach & Coordination"
          pronouns="he/him"
          image={Benjamin}
        />
        <Person
          name="Kunal Botla"
          role="Sponsorships & Logistics"
          pronouns="he/him"
          image={Kunal}
        />
        {/* <Person
          name="Sarthak Mohanty"
          role="Design Advisor"
          pronouns="he/him"
          image={Sarthak}
        /> */}
      </Grid>

      {/* <Heading as="h3" small>
        Alumni
      </Heading>
      <ul>
        {alumni.map((name, i) => (
          <li key={i} className="inline">
            {name} {i !== alumni.length - 1 && <>&bull;</>}{' '}
          </li>
        ))}
      </ul> */}
    </>
  )
}

export default Team
