import Header from './components/Header'
import Projects from './components/Projects'
import Thoughts from './components/Thoughts'
import Footer from './components/Footer'
import './styles/index.css'

function App() {
  const projects = [
    {
      id: 1,
      title: "A tiny dock management app for mac",
      description: "Summon your dock around cursor, no need to move to the bottom of the screen.",
      link: "https://github.com/VellerRider/KuchiyoseDock"
    },
    {
      id: 2,
      title: "A Safari-like Main page",
      description: "A simple main page like Safari. For people enjoy Safari's aesthetics but have to use Chrome.",
      link: "https://github.com/VellerRider/Fibre"
    },
    {
      id: 3,
      title: "A Review App",
      description: "Nothing special. For learning Java, Spring boot and Redis.",
      link: "https://github.com/VellerRider/ReviewRun"
    }
  ]

  const thoughts = [
    "Hmmm... there are things I'm not sharing, for now.",
  ]

  return (
    <div className="container">
      <Header 
        name="VellerRider" 
        subtitle="Writing, Coding, Dreaming" 
      />

      <div className="row g-4">
        <div className="col-lg-7 col-md-12">
          <Projects projects={projects} />
        </div>
        <div className="col-lg-5 col-md-12">
          <Thoughts thoughts={thoughts} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App