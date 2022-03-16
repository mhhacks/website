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

      {/* {children} */}
    </div>
  )
}

export default HomeLayout
