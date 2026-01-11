import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import LifeLine from './LifeLine/LifeLine'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/life-line" element={<LifeLine />} />
      </Routes>
    </Router>
  )
}

export default App
