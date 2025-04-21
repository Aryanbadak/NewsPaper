import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react'
import News from './Component/News';
import NewsNavbar from './Component/NewsNavbar';
import { Route, Routes } from 'react-router-dom'
import Footer from './Component/Footer';
import LoadingBar from "react-top-loading-bar";
import Uparrow from './Component/Uparrow';


const App = () => {

  const [showButton, setShowButton] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const [progress, setProgress] = useState(0)

  const apiKey = process.env.REACT_APP_NEWSPAPER_API

  const pagesize = 10;
  return (
    <div>
      <NewsNavbar />
      <LoadingBar
        color="#fff"
        progress={progress} />
      <Routes>
        <Route exact path='/' element={<News apiKey={apiKey} setProgress={setProgress} key="general" pagesize={pagesize} country="us" category="General" />} />
        <Route exact path='/business' element={<News apiKey={apiKey} setProgress={setProgress} key="business" pagesize={pagesize} country="us" category="Business" />} />
        <Route exact path='/entertainment' element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pagesize={pagesize} country="us" category="Entertainment" />} />
        <Route exact path='/health' element={<News apiKey={apiKey} setProgress={setProgress} key="health" pagesize={pagesize} country="us" category="Health" />} />
        <Route exact path='/science' element={<News apiKey={apiKey} setProgress={setProgress} key="science" pagesize={pagesize} country="us" category="Science" />} />
        <Route exact path='/sports' element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pagesize={pagesize} country="us" category="Sports" />} />
        <Route exact path='/technology' element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pagesize={pagesize} country="us" category="Technology" />} />
        <Route exact path='/help' ></Route>
        <Route exact path='/support' ></Route>
        <Route exact path='/about' ></Route>
      </Routes>

      <Footer />

      {
        showButton && <Uparrow />
      }
    </div>
  )
}

export default App;
