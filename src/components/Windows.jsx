import React from 'react'
import rearWindowImage from 'src/assets/window1818.jpg'

const Windows = () => {
    return (
        <div>
            <h2>Windows</h2>
            <p>Rear windows</p>
            <img src={rearWindowImage} alt="Rear window 18x18" className="materialsVertImg" />
        </div>
    )
}

export default Windows