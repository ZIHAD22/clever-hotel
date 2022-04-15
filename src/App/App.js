import { Route, Router, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Hotels from '../components/Hotels/Hotels'
import Login from '../components/Login/Login'
import Profile from '../components/Profile/Profile'
import SignUp from '../components/SignUp/SignUp'
import Slider from '../components/Slider/Slider'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Slider />}></Route>
        <Route path="/home" element={<Slider />}></Route>
        <Route path="/hotels" element={<Hotels />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  )
}

export default App
