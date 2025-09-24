
import './App.css'
import Navbar from './components/Navbar.jsx';
import Hero_Section from './components/Hero_Section.jsx';
import Testimonys from './components/Testimonys.jsx';
import Courses from './components/Courses.jsx';
import Getourapp from './components/Getourapp.jsx';
import Footer from './components/Footer.jsx';
function App() {
  return (
   <header>
    <div className="wrapper">
      <Navbar />
      <Hero_Section />
      <Testimonys/>
      <Courses/>
      <Getourapp/>
      <Footer/>
    </div>
   </header>
  )
}

export default App
