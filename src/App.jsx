import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Steps from './components/Steps'
import GreenBanner from './components/GreenBanner'
import Backoffice from './components/Backoffice'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Steps />
      <GreenBanner />
      <Backoffice />
    </div>
  )
}

export default App
