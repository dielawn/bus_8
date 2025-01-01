import React from 'react'
import './Home.css'
import { v4 as uuidv4 } from 'uuid';

import busFrontImage from 'src/assets/bus_front.webp'
import busProfileImage from 'src/assets/bus_profile.webp'
import busRearImage from 'src/assets/bus_rear.webp'
import busYFLogoHalls from 'src/assets/logo_bus_halls.webp'
import busYFLogoProfile from 'src/assets/logo_bus_profile.webp'
import busYFLogoMountain from 'src/assets/logo_bus_mountain.webp'

import PhotoCarousel from './Carousel'

const Home = () => {

    const homeImages = [
        {
            src: busYFLogoMountain,
            alt: 'Bus with Electric peak in background',
            isVerticle: true,
            id: uuidv4()
        },
        {
            src: busYFLogoHalls,
            alt: 'Yellowstone Forever bus in fleet parking',
            isVerticle: false            ,
            id: uuidv4()
        },
        {
            src: busYFLogoProfile,
            alt: 'Bus Profile',
            isVerticle: true,
            id: uuidv4()
        },
        {
            src: busFrontImage,
            alt: 'Bus front',
            isVerticle: false,
            id: uuidv4()
        },
        {
            src: busProfileImage,
            alt: 'Bus profile',
            isVerticle: true,
            id: uuidv4()
        },
        {
            src: busRearImage,
            alt: 'Bus back',
            isVerticle: false,
            id: uuidv4()
        }
    ]

    return (
        <div className='container'>
            <PhotoCarousel images={homeImages} />
            {/* { homeData.map((data, index) => (
                <div key={index}>
                    <img 
                        src={data.image} 
                        alt={data.alt} 
                        className={data.isVerticle ? 'busProfileVert' : 'busProfile'}
                    />
                    <p>{data.alt}</p>
                </div>
            ))} */}

            {/* <div className="homeHeader">

            <h1>Bus 8</h1>  
            <h2>2005 GMC 6.0 gas</h2>
            <p className='historyText'>Former life as a Yellowstone Forever Institute Tour Bus</p>     
            <p className='historyText'>Next life as an adventure RV</p>  
            </div> */}

        </div>
    )
}

export default Home