import React from 'react'
import hePexImage from 'src/assets/hePex.jpg'
import aquaHot125g from 'src/assets/aqua-hot_125g.webp'
import inFloorHeatingKit from 'src/assets/in-floor-heating-kit-parts.jpg'
import heatExchangers from 'src/assets/Compact-Cozy-Heat-Exchangers.jpg'

const Heating = () => {
    return (
        <div className='marginLeft'>
            <h2>Heating</h2>
            <div className="materialsList">
                <p>1/2" hePex w/Oxygen barrier</p>
                <img src={hePexImage} alt="1/2 inch hePex with Oxygen barrier" className="materialsVertImg" />
                <p>Aqua-Hot 125g</p>
                <img src={aquaHot125g} alt="Aqua-Hot 125g" className="materialsVertImg" />
                <p>Aqua-Hot In-Floor Heating Accessory Kit</p>
                <img src={inFloorHeatingKit} alt="Aqua-Hot In-Floor Heating Accessory Kit parts" className="materialsVertImg" />
                <p>Heat exchangers</p>
                <img src={heatExchangers} alt="Compact Cozy Heat Exchangers" className="materialsHorzImg" />
            </div>
        </div>
    )
}

export default Heating