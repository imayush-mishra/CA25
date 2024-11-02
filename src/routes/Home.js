import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import MainPage from '../Components/MainPage';
import About from '../Components/About';
import Terms from '../Components/Terms';
import Incentives from '../Components/Incentives';
import Response from '../Components/Response';
import FAQ from '../Components/FAQ';
const Home = () => {
  return (
    <div>
    <Navbar/>
    <MainPage/>    
    <About/>
    <Response/>
    <Incentives/>
    <FAQ/>
    <Terms/>
    <Footer/>

    </div>

  )
}

export default Home