import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages and home component
import Home from './pages/Home'
import EditWindow from './pages/EditWindow'
import Navigation from './Components/Navbar'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>

        <Navigation/>

        <div className="pages">
          <Routes>
          
            <Route path="/" element={<Home/>}/>
            <Route path="/edit" element={<EditWindow/>}/>

          </Routes>
        </div>

      </BrowserRouter>
    </div>
  )
}

export default App