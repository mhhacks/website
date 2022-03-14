import Script from 'next/script'

const AnalyticsScript = () => (
  <>
    {process.env.NODE_ENV === 'production' && (
      <Script
        data-collect-dnt="true"
        src="https://simplea.milehighhacks.com/latest.js"
      />
    )}
  </>
)

export default AnalyticsScript
