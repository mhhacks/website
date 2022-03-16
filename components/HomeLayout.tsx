import DenverPhoto from '../photos/landing.jpeg'
import AnalyticsScript from './AnalyticsScript'
import Landing from './Landing'
import Navbar from './Navbar'

const HomeLayout: React.FC = ({ children }) => {
  return (
    <div>
      <AnalyticsScript />
      <Navbar />

      <Landing />

      <div className="mx-auto max-w-3xl px-4">{children}</div>
    </div>
  )
}

export default HomeLayout
