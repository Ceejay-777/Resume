import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home.jsx'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Home/Home'
import MainSharedLayout from './sharedLayouts/mainSharedLayout'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainSharedLayout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='projects' element={<Projects />}/>
          <Route path='contact' element={<Contact />}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
