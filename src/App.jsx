import React from 'react'
import Header from './component/Header'
import TimerSection from './page/TimerSection'
import TextSection from './page/TextSection'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<TimerSection />} />
        <Route path='/details' element={<TextSection />} />


      </Routes>

    </BrowserRouter>
  )
}

export default App