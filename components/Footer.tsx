import Icon from '@hackclub/icons'
import Link from 'next/link'

const SocialButton = ({ glyph, href }: any) => (
  <a target={'_blank'} rel="noreferrer" href={href}>
    <Icon
      glyph={glyph}
      size={36}
      className="hover:text-co-red transition-all"
    />
  </a>
)

const FooterLink = ({ href, children }: any) => (
  <Link href={href}>
    <a className="underline hover:text-co-red font-medium transition-all">{children}</a>
  </Link>
)

const Footer: React.FC = () => {
  return (
    <div className="pt-40">
      <div className="relative">
        <div className="divider">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>

          <style jsx>{`
            .divider {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              overflow: hidden;
              line-height: 0;
              transform: rotate(180deg);
            }

            .divider svg {
              position: relative;
              display: block;
              width: calc(100% + 1.3px);
              height: 100px;
            }

            .divider .shape-fill {
              fill: #f6d047;
            }
          `}</style>
        </div>
      </div>

      <div className="bg-primary text-sm">
        <div className="p-14 flex flex-col sm:flex-row items-center max-w-3xl mx-auto gap-6 justify-center">
          <div className="flex flex-row sm:flex-col gap-3">
            <SocialButton
              href="https://www.instagram.com/milehighhacks/"
              glyph="instagram"
            />
            <SocialButton
              href="https://twitter.com/milehighhacks"
              glyph="twitter"
            />
            <SocialButton href="https://github.com/mhhacks" glyph="github" />
            <SocialButton href="mailto:team@milehighhacks.com" glyph="email" />
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <a
                target={'_blank'}
                rel="noreferrer"
                href="https://vercel.com/?utm_source=milehighhacks&utm_campaign=oss"
              >
                {/* eslint-disable @next/next/no-img-element */}
                <img
                  src="/img/powered-by-vercel.svg"
                  alt="Powered By Vercel"
                  className="w-44"
                />
              </a>
            </div>

            <div>
              <a
                target={'_blank'}
                rel="noreferrer"
                href="https://bank.hackclub.com/mile-high-hacks/"
              >
                {/* eslint-disable @next/next/no-img-element */}
                <img
                  src="/img/powered-by-hcb.svg"
                  alt="Powered By Hack Club Bank"
                  className="w-44"
                />
              </a>
            </div>

            <FooterLink href="/conduct">code of conduct</FooterLink>

            <p className="font-semibold">
              Copyright {new Date().getFullYear()} Mile High Hacks.
            </p>

            <div className="opacity-70">
              <p>
                Fiscally sponsored by{' '}
                <a className="underline" href="https://hackfoundation.org/">
                  The Hack Foundation
                </a>
                .
              </p>
              <p>Nonprofit EIN: 81-2908499</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
