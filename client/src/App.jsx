import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import CreateUser from './pages/CreateUser'

export default function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/createuser' element={<CreateUser/>} />
      </Routes>
    </Router>
  )
}
