import Navbar from './Navbar'
import Footer from './Footer'
import clsx from 'clsx'
import AnalyticsScript from './AnalyticsScript'

const PageLayout: React.FC<{ mdx?: boolean }> = ({ children, mdx }) => {
  return (
    <div>
      <AnalyticsScript />
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 my-20 min-h-screen">
        <div className={clsx(mdx && 'mdx')}>{children}</div>
      </div>

      <Footer />
    </div>
  )
}

export default PageLayout
