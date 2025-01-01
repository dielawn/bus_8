import './Floor.css'
import rawFloor from 'src/assets/raw_floor.webp'
import { v4 as uuidv4 } from 'uuid';
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
import PhotoCarousel from './Carousel'





const Floor = () => {
    const floorImages = [ 
        {
            src: rawFloor,
            alt: 'Got to bare floor, no rust (Montana is cool like that), cleaned and dried.',
            isVerticle: true,  
            id: uuidv4()          
        }, 
        {
            src: chasisSaverFinal,
            alt: 'Applied 2 coats of "Chasis Saver"',
            isVerticle: true,
            id: uuidv4()
        }, 
        {
            src: foamular,
            alt: 'Cut & Glued 2" Foamular to floor pan. Put weight on boards and let glue cure for 24hr.',
            isVerticle: false,
            id: uuidv4()
        }, 
        {
            src: floorPipeRouting,
            alt: 'Traced pipe routing to work out problems before cutting. A 1 gal paint can was a perfect for a 6" turn.',
            isVerticle: false,
            id: uuidv4()           
        }, 
        {
            src: routedFloor,
            alt: 'Routed out pipe paths. I ended up using a 5/8" router bit for  1/2" pex.',
            isVerticle: true,
            id: uuidv4()
        }, 
        {
            src: floorDefusers,
            alt: 'Install diffusers where ever you have a straight run of pipe.',
            isVerticle: true,
            id: uuidv4()
        }, 
        {
            src: floorDefusersRear,
            alt: 'Installed diffusers from rear',
            isVerticle: false,
            id: uuidv4()
        }, 
        {
            src: hePex,
            alt: '1/2" High Efficiency Pex (hePex) used for radiant floor heating.',
            isVerticle: false,
            id: uuidv4()
        }, 
        {
            src: floorPipeInstalled,
            alt: 'Routed hePex trying to work out twists and tension.',
            isVerticle: false,
            id: uuidv4()
        }, 
        {
            src: floorPipeInstalledRear,
            alt: 'Ended up taping diffuser seams and pipe turns down.',
            isVerticle: false,
            id: uuidv4()
        }, 
        {
            src: floorPipeInstalledRearCloseUp,
            alt: 'Finished! Next is gluing down the subfloor.',
            isVerticle: true,
            id: uuidv4()
        }
    ]

    return (
        <div>
            <PhotoCarousel images={floorImages}/> 
        </div>
    )
}

export default Floor