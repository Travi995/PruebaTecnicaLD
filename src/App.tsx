
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

const  App = () =>{

  return <div>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>

  </div>
}

export default App
