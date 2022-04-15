import { Route, Router, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Hotels from '../components/Hotels/Hotels'
import Slider from '../components/Slider/Slider'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Slider />}></Route>
        <Route path="/hotels" element={<Hotels />}></Route>
      </Routes>
    </div>
  )
}

export default App
