import './Windows.css'
import React from 'react'
import rearWindowImage from 'src/assets/window1818.webp'
import deletesInterior from 'src/assets/window_deletes_interior.webp'
import bendDelete from 'src/assets/window_delete_bend.webp'
import deletesExteriorThree from 'src/assets/winodw_deletes_three.webp'
import bendDelete1 from 'src/assets/bend1.webp'
import bendDelete2 from 'src/assets/bend_2.webp'
import singleDelete from 'src/assets/delete_single.webp'

import passExteriorInstalled from 'src/assets/window_installed_passenger.webp'
import interiorInstalledWindow from 'src/assets/window_interior_installed.webp'
import rrWindow from 'src/assets/window_RR.webp'
import lrWindow from 'src/assets/window_LR.webp'
import passExteriorInstalledHildy from 'src/assets/windows_installed_passenger_hildy.webp'
import interiorPass from 'src/assets/windows_interior_passenger.webp'
import rearWindows from 'src/assets/windows_rear.webp'


const Windows = () => {
    const windowData = [
        {
            image: bendDelete1,
            description: '',
            isVerticle: true
        },
        {
            image: bendDelete2,
            description: '',
            isVerticle: true
        },
        {
            image: bendDelete,
            description: '',
            isVerticle: true
        },
        {
            image: deletesInterior,
            description: 'Using removed interior aluminum panels to make window deletes.',
            isVerticle: true
        },
        {
            image: singleDelete,
            description: '',
            isVerticle: true
        },
        {
            image: deletesExteriorThree,
            description: '',
            isVerticle: true
        },        
        
        {
            image: interiorInstalledWindow,
            description: '',
            isVerticle: true
        },
        {
            image: rrWindow,
            description: '',
            isVerticle: true
        },
        {
            image: lrWindow,
            description: '',
            isVerticle: true
        },
        {
            image: interiorPass,
            description: '',
            isVerticle: true
        },
        {
            image: passExteriorInstalledHildy,
            description: '',
            isVerticle: true
        },
        {
            image: rearWindows,
            description: '',
            isVerticle: true
        },
    ]

    return (
        <div className='container flex'>
            <h2>Window Deletes</h2>
            <h3>Making window deletes from interior roof panels</h3>
            {/* <img src={rearWindowImage} alt="Rear window 18x18" className="busInteriorVertImg" /> */}
            <ul>
                <li>Measure each window opening individually</li>
                <li>Add 2" to each measurement</li>
                <li>Cut out</li>
                <li>Cut 1x1" from each corner</li>
                <li>Bend each 1" tab 90°</li>
            </ul>
            {windowData.map((image, index) => (
                <div key={index} className=''>
                    <img 
                        src={image.image} 
                        alt={image.description} 
                        className={image.isVerticle ? 'busInteriorVertImg': 'busInteriorImg' }
                    />
                    <p>
                        {image.description}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Windows