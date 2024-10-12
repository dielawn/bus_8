import React from 'react'
import lynxPowerInImage from 'src/assets/Lynx_Power_in_front_LYN020102000.webp'

const Electrical = () => {
    return (
        <div>
           <h2>Electrical</h2>
           <p>Lynx Power In</p>
           <img 
             className="materialsVertImg" 
             src={lynxPowerInImage} 
             alt="Lynx Power In front LYN020102000" 
           />
        </div>
    )
}

export default Electrical