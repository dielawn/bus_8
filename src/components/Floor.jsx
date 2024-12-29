import './Floor.css'
import rawFloor from 'src/assets/raw_floor.webp'

import chasisSaverFinal from 'src/assets/chasis_saver_finish.webp'
import foamular from 'src/assets/owens-corning-foam-board-insulation.avif'
import floorPipeRouting from 'src/assets/floor_pipe_routing.webp'
import routedFloor from 'src/assets/routed_floor.webp'
import floorDefusers from 'src/assets/floor_defusers.webp'
import floorDefusersRear from 'src/assets/floor_defusers_rear.webp'
import hePex from 'src/assets/hePex.webp'
import floorPipeInstalled from 'src/assets/floor_pipes_installed.webp'
import floorPipeInstalledRear from 'src/assets/floor_pipes_installed_rear.webp'
import floorPipeInstalledRearCloseUp from 'src/assets/floor_pipes_installed_rear_closeup.webp'





const Floor = () => {
    const pageImages = [ 
        {
            image: rawFloor,
            description: 'Got to bare floor, no rust (Montana is cool like that), cleaned and dried.',
            isVerticle: true,            
        }, 
        {
            image: chasisSaverFinal,
            description: 'Applied 2 coats of "Chasis Saver"',
            isVerticle: true,
        }, 
        {
            image: foamular,
            description: 'Cut & Glued 2" Foamular to floor pan. Put weight on boards and let glue cure for 24hr.',
            isVerticle: false,
        }, 
        {
            image: floorPipeRouting,
            description: 'Traced pipe routing to work out problems before cutting. A 1 gal paint can was a perfect for a 6" turn.',
            isVerticle: false,
        }, 
        {
            image: routedFloor,
            description: 'Routed out pipe paths. I ended up using a 5/8" router bit for  1/2" pex.',
            isVerticle: true,
        }, 
        {
            image: floorDefusers,
            description: 'Installed diffusers',
            isVerticle: true,
        }, 
        {
            image: floorDefusersRear,
            description: 'Installed diffusers from rear',
            isVerticle: false,
        }, 
        {
            image: hePex,
            description: '1/2" High Efficiency Pex (hePex) used for radiant floor heating.',
            isVerticle: false,
        }, 
        {
            image: floorPipeInstalled,
            description: 'Routed hePex trying to work out twists and tension',
            isVerticle: false,
        }, 
        {
            image: floorPipeInstalledRear,
            description: 'Ended up taping diffuser seams and pipe turns down',
            isVerticle: false,
        }, 
        {
            image: floorPipeInstalledRearCloseUp,
            description: 'Finished! Next is gluing down the subfloor',
            isVerticle: true,
        }
    ]

    return (
        <div>
            <div className="flex floorImgDiv">
                {pageImages.map((image, index) => (
                <div key={index} className="relative group">
                    <img
                    src={image.image}
                    alt={image.description}
                    className= {image.isVerticle ? 'busInteriorVertImg': 'busInteriorImg'}
                    loading="lazy"
                    />
                    <p className="descTxt">
                        {image.description}
                    </p>
                </div>
                ))}
            </div>                        
        </div>
    )
}

export default Floor