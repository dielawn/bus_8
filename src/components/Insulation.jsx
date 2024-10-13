import React from 'react'
import foamBoardInsulation from 'src/assets/owens-corning-foam-board-insulation.avif'
import constructionAdhesive from 'src/assets/loctite-drywall-subfloor-construction-adhesive.avif'
import sprayInsulations from 'src/assets/spray_insulations.webp'

const Insulation = () => {
    return (
        <div className='marginLeft'>
           <h2>Insulation Materials</h2>
            <div className="materialsList">
                <p>2" Formular NDX for floor</p>
                <img 
                    className="materialsVertImg" 
                    src={foamBoardInsulation} 
                    alt="Owens Corning foam board insulation" 
                />
                <p>Glue foam to treated (chasis saver) bus pan and subfloor to foam</p>
                <img 
                    className="materialsVertImg" 
                    src={constructionAdhesive} 
                    alt="Loctite drywall subfloor construction adhesive" 
                />
                <p>Walls and ceiling insulated with spray insulation</p>
                <img 
                    className="materialsVertImg" 
                    src={sprayInsulations} 
                    alt="Spray insulations" 
                />
            </div>
        </div>
    )
}

export default Insulation