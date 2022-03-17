import type { NextPage } from 'next'
import Heading from 'components/Heading'
import FAQ from 'components/Sections/FAQ.mdx'
import Details from 'components/Sections/Details.mdx'
import Team from 'components/Sections/Team'
import Meta from 'components/Meta'
import Sponsors from 'components/Sections/Sponsors'
import HomeLayout from 'components/HomeLayout'
import InfoGrid from 'components/Sections/InfoGrid'
import Icon from '@hackclub/icons'

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <Meta />

      <div>
        <div id="how-it-works" className="mb-20">
          <Heading>What&apos;s this?</Heading>
          <Details />
          <InfoGrid />
        </div>

        <div id="sponsors">
          <Heading>Brought to you by</Heading>
          <p className="text-center text-xl font-light leading-snug">
            Mile High Hacks is made possible by our awesome sponsors.
            <br />
            <a
              className="underline opacity-50 hover:opacity-80 text-base"
              href="mailto:team@milehighhacks.com?subject=Sponsorship Inquiry&body=I'd like to get information about partnership opportunities for Mile High Hacks!"
            >
              Want to work together?
            </a>
          </p>

          <Sponsors />
        </div>

        <div className="pt-24" id="faq">
          <div className="p-12 bg-co-blue rounded-md text-white">
            <Heading className="!p-0 !m-0 leading-none !text-white">
              FAQ?!?
            </Heading>
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
