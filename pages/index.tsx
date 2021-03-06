import type { NextPage } from 'next'
import SectionHeading from 'components/SectionHeading'
import FAQ from 'components/Sections/FAQ.mdx'
import Details from 'components/Sections/Details.mdx'
import Team from 'components/Sections/Team'
import Meta from 'components/Meta'
import InfoGrid from 'components/Sections/InfoGrid'
import Landing from 'components/Landing2'
import Navbar from 'components/Navbar'
import AnalyticsScript from 'components/AnalyticsScript'
import Footer from 'components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <AnalyticsScript />
      <Meta />
      <Navbar />
      <Landing />

      <div className="mx-auto max-w-3xl px-4">
        <div>
          <div id="how-it-works" className="mb-20">
            <SectionHeading>What&apos;s this?</SectionHeading>
            <Details />
            <InfoGrid />
          </div>

          {/* <div id="sponsors">
            <SectionHeading>Brought to you by</SectionHeading>
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
          </div> */}

          <div className="pt-24" id="faq">
            <div className="p-6 sm:p-12 bg-secondary rounded-md text-white">
              <SectionHeading className="!p-0 !m-0 leading-none !text-white">
                FAQ?!?
              </SectionHeading>
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
            <SectionHeading>Our team</SectionHeading>

            <Team />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
