import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Profile from './pages/Profile'
import AboutUs from './pages/AboutUs'
import Courses from './pages/Courses'
import Orders from './pages/Orders'
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn'

import Layout from './components/Layout/Layout'
import RequireAuth from './hoc/RequireAuth'
import { AuthProvider } from './hoc/AuthProvider'

import './App.css'

const App = () => {
  return <AuthProvider>
      <Routes>
          <Route path='/login' element={ <SignIn /> } />
          <Route path='/' element={ <Layout /> }>
              <Route index element={
                  <RequireAuth>
                      <Profile />
                  </RequireAuth>
              } />
              <Route path='/courses' element={
                  <RequireAuth>
                      <Courses />
                  </RequireAuth>
              } />
              <Route path='/orders' element={
                  <RequireAuth>
                      <Orders />
                  </RequireAuth>
              } />
              <Route path='/about-us' element={
                  <RequireAuth>
                      <AboutUs />
                  </RequireAuth>
              } />
              <Route path='*' element={
                  <RequireAuth>
                      <NotFound />
                  </RequireAuth>
              } />
          </Route>
      </Routes>
    </AuthProvider>
}

export default App
