import React from 'react'
import './Home.css'
import busFrontImage from 'src/assets/bus_front.webp'
import busProfileImage from 'src/assets/bus_profile.webp'
import busRearImage from 'src/assets/bus_rear.webp'
import busYFLogoHalls from 'src/assets/logo_bus_halls.webp'
import busYFLogoProfile from 'src/assets/logo_bus_profile.webp'
import busYFLogoMountain from 'src/assets/logo_bus_mountain.webp'


const Home = () => {
    return (
        <div className='container busColageDiv'>
            <img src={busYFLogoMountain} className='busProfileVert' alt="Bus with Electric peak in background" />
            <img src={busYFLogoHalls} className='busProfile' alt="Yellowstone Forever bus in fleet parking" /> 
            <img src={busYFLogoProfile} alt="Bus Profile" className='busProfileVert' />
            
            <img className='busProfile' src={busFrontImage} alt="Bus front" />
            <img className='busProfileVert' src={busProfileImage} alt="Bus profile" />   
            <img className='busProfile' src={busRearImage} alt="Bus back" />

            <div className="homeHeader">

            <h1>Bus 8</h1>  
            <h2>2005 GMC 6.0 gas</h2>
            <p className='historyText'>Former life as a Yellowstone Forever Institute Tour Bus</p>     
            <p className='historyText'>Next life as an adventure RV</p>  
            </div>

            <div className="historyText">
            
            </div>
              
              
 
        </div>
    )
}

export default Home