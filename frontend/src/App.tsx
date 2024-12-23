import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import AboutUs from './pages/AboutUs'
import Courses from './pages/Courses'
import Orders from './pages/Orders'
import NotFound from './pages/NotFound'
import Layout from './components/Layout/Layout.tsx'

const App = () => {
  return <>
      <Routes>
          <Route path='/' element={ <Layout />}>
              <Route index element={<Profile />} />
              <Route path='/courses' element={<Courses />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/about-us' element={<AboutUs />} />
              <Route path='*' element={<NotFound />} />
          </Route>
      </Routes>
    </>
}

export default App
