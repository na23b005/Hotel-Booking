import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import { List } from './pages/List/list'
import Hotel from './pages/Hotel/Hotel'
import Login from './pages/login/Login'
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/hotels' element={<List />}/>
    <Route path='/hotels/:id' element={<Hotel/>}/>
        <Route path='/login' element={<Login/>}/>

   </Routes>
   </BrowserRouter>
  )
}

export default App