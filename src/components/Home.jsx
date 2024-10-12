import React from 'react'
import busFrontImage from 'src/assets/bus_front.jpg'
import busProfileImage from 'src/assets/bus_profile.jpg'
import busRearImage from 'src/assets/bus_rear.jpg'

const Home = () => {
    return (
        <>
            <img className='busProfileVert' src={busFrontImage} alt="Bus front" />
            <img className='busProfile' src={busProfileImage} alt="Bus profile" />   
            <img className='busProfileVert' src={busRearImage} alt="Bus back" />
            <h1>Bus History & info</h1>
            <h2>Fleet #: Bus 8</h2>    
            <h2>2005 GMC 6.0 gas</h2>
            <p>Former life as a Yellowstone Forever Institute Tour Bus</p>     
            <p>Next life as an adventure RV</p>     
        </>
    )
}

export default Home