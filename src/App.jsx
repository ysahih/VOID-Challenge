import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 py-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 min-h-[400px] flex items-center justify-center">
          <p className="text-gray-400 font-medium">Additional sections can go here</p>
        </div>
      </main>
    </div>
  )
}

export default App
