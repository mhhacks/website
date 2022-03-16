import type { NextPage } from 'next'
import Heading from 'components/Heading'
import FAQ from 'components/Sections/FAQ.mdx'
import Team from 'components/Sections/Team'
import Meta from 'components/Meta'
import Sponsors from 'components/Sections/Sponsors'
import HomeLayout from 'components/HomeLayout'
import InfoGrid from 'components/InfoGrid'

const Home: NextPage = () => {
  return (
    <HomeLayout>
      {/* <Meta /> */}

      <div>
        <div id="how-it-works" className="mb-20">
          <Heading>What&apos;s this?</Heading>
          <p className="text-lg leading-relaxed font-light">
            <strong className="font-semibold">Mile High Hacks</strong> is an
            event (called a <strong className="font-semibold">hackathon</strong>
            ) that will bring over 100 high schoolers from Denver and the
            surrounding regions together for 24 hours to design, invent, code,
            and build apps and games. On Saturday, participants will get matched into a
            team of four people - or bring a team of
            friends! On the second day, our judges will select the winning
            teams to demo their projects and win prizes! Mile High Hacks is designed for all skill levels, whether you&apos;ve never written code before or have been coding for years.
          </p>

          <InfoGrid />
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
    </HomeLayout>
  )
}

export default Home
