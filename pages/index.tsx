import type { NextPage } from 'next'
import Heading from 'components/Heading'
import FAQ from 'components/Sections/FAQ.mdx'
import Team from 'components/Sections/Team'
import Meta from 'components/Meta'
import Sponsors from 'components/Sections/Sponsors'
import HomeLayout from 'components/HomeLayout'
import InfoGrid from 'components/Sections/InfoGrid'
import Icon from '@hackclub/icons'

const Home: NextPage = () => {
  return (
    <HomeLayout>
      {/* <Meta /> */}

      <div>
        <div id="how-it-works" className="mb-20">
          <Heading>What&apos;s this?</Heading>
          <p className="text-lg leading-relaxed font-light">
            <strong className="font-semibold">Mile High Hacks</strong> is a{' '}
            <strong className="font-semibold">hackathon</strong> that will bring
            over 100 high schoolers from Denver and the surrounding regions
            together for 24 hours to design, invent, code, and build apps and
            games. Mile High Hacks is designed for all skill levels, whether
            you&apos;ve never written code before or have been coding for years.
            On Saturday, participants will get matched into a team of four
            people to build a project with - or bring a team of friends! On the
            Sunday, our judges will select the winning teams to demo their
            projects and earn prizes!
          </p>

          <InfoGrid />
        </div>

        <div id="sponsors">
          <Heading>Brought to you by</Heading>
          <p className="text-center text-xl font-light leading-snug">
            Mile High Hacks is made possible by our awesome sponsors.
            <br />
            <a
              className="underline opacity-50 hover:opacity-80"
              href="mailto:team@milehighhacks.com?subject=Sponsorship Inquiry&body=I'd like to get information about partnership opportunities for Mile High Hacks!"
            >
              Want to work together?
            </a>
          </p>

          <Sponsors />
        </div>

        <div className="pt-24" id="faq">
          <div className="p-12 bg-co-blue rounded-md text-white">
            <Heading className="!p-0 !m-0 leading-none !text-white">FAQ?!?</Heading>
            <p className="my-6 text-center text-lg">
              Feel free to send questions (or memes) to{' '}
              <a className="underline" href="mailto:team@milehighhacks.com">
                team@milehighhacks.com
              </a>
            </p>

            <div className="mdx">
              <FAQ />
            </div>
          </div>
        </div>

        <div id="team">
          <Heading>Our team</Heading>

          <Team />
        </div>
      </div>
    </HomeLayout>
  )
}

export default Home
