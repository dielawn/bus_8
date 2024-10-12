import React from 'react'
import freshTankImage from 'src/assets/fresh_tank.jpg'
import grayTankImage from 'src/assets/gray_tank.jpg'

const Water = () => {
    return (
        <div>
            <h2>Water</h2>
            <img src={freshTankImage} alt="Fresh water tank" className="materialsVertImg" />
            <img src={grayTankImage} alt="Gray water tank" className="materialsVertImg" />
        </div>
    )
}

export default Water