import './Windows.css'
import React from 'react'
import PhotoCarousel from './Carousel'
import { v4 as uuidv4 } from 'uuid';
import rearWindowsrc from 'src/assets/window1818.webp'
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
    const windowImages = [
        {
            src: bendDelete1,
            alt: 'Re-purposing the aluminum interior panels as window deletes. ',
            isVerticle: true,
            id: uuidv4()
        },
        {
            src: bendDelete2,
            alt: 'I was able to fully bend 2 oposite sides, then crease the remaining sides and finish the bends with "flashing pliers".',
            isVerticle: true,
            id: uuidv4()
        },
        {
            src: bendDelete,
            alt: 'I made 3 bad ones before I made a good one.',
            isVerticle: true,
            id: uuidv4()
        },
        {
            src: deletesExteriorThree,
            alt: 'Test fit before sanding and priming.',
            isVerticle: true,
            id: uuidv4()
        }, 
        {
            src: singleDelete,
            alt: 'Using butyl tape around the lip and self taping screws into the bus framing.',
            isVerticle: true,
            id: uuidv4()
        },
        {
            src: deletesInterior,
            alt: 'Took most of 2 days to make and install the window deletes.',
            isVerticle: true,
            id: uuidv4()
        },                 
        
        {
            src: interiorInstalledWindow,
            alt: 'Window and frame installed from interior.',
            isVerticle: true,
            id: uuidv4()
        },
        {
            src: lrWindow,
            alt: 'I thought these windows would fit in the existing holes but the seals were just shy. ',
            isVerticle: true,
            id: uuidv4()
        },
        {
            src: rrWindow,
            alt: 'To fit these windows I had to drill out existing rivets and add these panels.',
            isVerticle: true,
            id: uuidv4()
        },
        {
            src: rearWindows,
            alt: 'Starting to look like something Mad Max would be proud of.',
            isVerticle: true,
            id: uuidv4()
        },
        {
            src: interiorPass,
            alt: 'First 2 windows on the left will be in the "kitchen" area and the last will be in the "bathroom".',
            isVerticle: true,
            id: uuidv4()
        },
        {
            src: passExteriorInstalledHildy,
            alt: 'Hildy approves!',
            isVerticle: true,
            id: uuidv4()
        },
        
    ]

    return (
        <div>
            <PhotoCarousel images={windowImages} />           
        </div>
    )
}

export default Windows