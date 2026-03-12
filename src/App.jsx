import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Steps from './components/Steps'
import GreenBanner from './components/GreenBanner'
import Backoffice from './components/Backoffice'
import StatsBar from './components/StatsBar'
import Pricing from './components/Pricing'
import Catalogue from './components/Catalogue'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Steps />
      <GreenBanner />
      <Backoffice />
      <StatsBar />
      <Pricing />
      <Catalogue />
    </div>
  )
}

export default App
