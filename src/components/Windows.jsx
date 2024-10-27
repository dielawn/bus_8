import './Windows.css'
import React from 'react'
import rearWindowImage from 'src/assets/window1818.jpg'
import deletesInterior from 'src/assets/window_deletes_interior.jpg'
import bendDelete from 'src/assets/window_delete_bend.jpg'
import deletesExteriorThree from 'src/assets/winodw_deletes_three.jpg'
import bendDelete1 from 'src/assets/bend1.jpg'
import bendDelete2 from 'src/assets/bend_2.jpg'
import singleDelete from 'src/assets/delete_single.jpg'


const Windows = () => {
    return (
        <div>
            <h2>Windows</h2>
            <h3>Making window deletes from interior roof panels</h3>
            {/* <img src={rearWindowImage} alt="Rear window 18x18" className="materialsVertImg" /> */}
            <ul>
                <li>Measure each window opening individually</li>
                <li>Add 2" to each measurement</li>
                <li>Cut out</li>
                <li>Cut 1x1" from each corner</li>
                <li>Bend each 1" tab 90°</li>
            </ul>
            <img src={bendDelete1} alt="Bending delete panel" className="materialsVertImg" />
            <img src={bendDelete2} alt="Bending delete panel" className="materialsVertImg" />
            <img src={bendDelete} alt="Bending a window delete" className="horzImg" />
            <img src={singleDelete} alt="Installed delete panel" className="horzImg" />
            <img src={deletesExteriorThree} alt="Three installed window deletes" className="materialsVertImg" />
            <img src={deletesInterior} alt="Interior view of installed window deletes" className="horzImg" />

        </div>
    )
}

export default Windows