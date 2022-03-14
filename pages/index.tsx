import type { NextPage } from 'next'
import Heading from 'components/Heading'
import { BsArrowRight } from 'react-icons/bs'
import FAQ from 'components/Sections/FAQ.mdx'
import Team from 'components/Sections/Team'
import Meta from 'components/Meta'
import Sponsors from 'components/Sections/Sponsors'

const Home: NextPage = () => {
  return (
    <div>
      {/* <Meta /> */}

      <div>

        <div className='h-screen flex items-center justify-center text-xl font-medium'>
          Mile High Hacks: coming to Denver, CO this fall
        </div>

        {/* <div id="sponsors">
          <Heading>Sponsors</Heading>
          <p className="text-gray-400 text-sm">
            MAHacks is made possible by our awesome sponsors–
            <a className="underline" href="/prospectus">
              check out our prospectus
            </a>
            ! Want to work together?&nbsp;
            <a
              className="font-semibold hover:underline inline-flex items-center"
              href="mailto:team@mahacks.com"
            >
              Let&apos;s talk <BsArrowRight className="inline-block mx-1" />
            </a>
          </p>

          <Sponsors />
        </div> */}

        {/* <div id="faq">
          <Heading>FAQ</Heading>
          <p className="text-gray-400 text-sm">
            Have a question?{' '}
            <a
              className="font-semibold hover:underline inline-flex items-center"
              href="mailto:team@mahacks.com"
            >
              Contact the team <BsArrowRight className="inline-block mx-1" />
            </a>
          </p>

          <div className="p-6 rounded-2xl bg-bg-card my-4 mdx">
            <FAQ />
          </div>
        </div> */}

        {/* <div id="team">
          <Heading>Team</Heading>

          <Team />
        </div> */}
      </div>
    </div>
  )
}

export default Home
