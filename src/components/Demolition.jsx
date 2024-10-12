import interior_demo1 from 'src/assets/interior_demo1.jpg'
import interior_demo2 from 'src/assets/interior_demo2.jpg'
import rear_demo from 'src/assets/rear_demo.jpg'
import interior_ceiling_windows from 'src/assets/interior_ceiling_windows.jpg'
import raw_floor from 'src/assets/raw_floor.jpg'
import chasis_saver_start from 'src/assets/chasis_saver_start.jpg'
import chasis_saver_finish from 'src/assets/chasis_saver_finish.jpg'
import chasis_saver_close_up from 'src/assets/chasis_saver_close_up.jpg'

const Demolition = () => {
    return (
        <div>
            <img className="busInteriorImg" src={interior_demo1} alt="Interior demolition 1" />
            <img src={rear_demo} alt="Rear demolition" className="busInteriorImg" />
            <img src={interior_demo2} alt="Interior demolition 2" className="busInteriorImg" />
            <img src={interior_ceiling_windows} alt="Interior ceiling windows" className="busInteriorImg" />
            <img src={raw_floor} alt="Raw floor" className="busInteriorVertImg" />
            <img src={chasis_saver_start} alt="Chassis saver start" className="busInteriorVertImg" />
            <img src={chasis_saver_finish} alt="Chassis saver finish" className="busInteriorVertImg" />
            <img src={chasis_saver_close_up} alt="Chassis saver close up" className="busInteriorImg" />
        </div>
    )
}

export default Demolition