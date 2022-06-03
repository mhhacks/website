import Script from 'next/script'

const AnalyticsScript = () => (
  <>
    {process.env.NODE_ENV === 'production' && (
      <>
        <Script
          data-collect-dnt="true"
          src="https://simplea.milehighhacks.com/latest.js"
        />
        <noscript>
          {/* eslint-disable @next/next/no-img-element */}
          <img
            src="https://simplea.milehighhacks.com/noscript.gif"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript>
      </>
    )}
  </>
)

export default AnalyticsScript
