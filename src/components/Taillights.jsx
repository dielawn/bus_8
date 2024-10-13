import React from 'react'
import taillights_right_done from 'src/assets/taillights_right_done.jpg'
import finished_marker from 'src/assets/finished_marker.jpg'
import finished_taillights_wide from 'src/assets/finished_taillights_wide.jpg'
import finished_taillights from 'src/assets/finished_taillights.jpg'
import left_tail_loom from 'src/assets/left_tail_loom.jpg'

const Taillights = () => {

    return (
        <div>
            <div className="imgDiv">
                <img src={taillights_right_done} alt="Right side taillight wiring" className="materialsVertImg"  />
                <img src={finished_marker} alt="Finished marker light wiring" className="materialsVertImg" />
                <img src={finished_taillights} alt="Finished taillight wiring" className="materialsVertImg" />
                <img src={finished_taillights_wide} alt="Finished taillight wiring wide shot" className="materialsVertImg" />
                <img src={left_tail_loom} alt="Left side taillight wiring and loom routing" className="materialsVertImg" />
            </div>
            <div className="flex">
            <div>Factory Taillight Wire Junction = </div><div className='redBox'></div>
            </div>
             <div className="underBus">
            <div className="labelTxt leftFrame">frame</div>
            <div className="labelTxt rightFrame">frame</div>
            <div className="labelTxt engine">Engine</div>
            <div className="labelTxt trans">Transmission</div>
            
            <div className="labelTxt fuelTank">Fuel Tank</div>
                <div className="livSp">
                    {/* <div className="lfStorage">
                        Gray Water 23g
                    </div>
                    <div className="storageBox frontBox">Box</div>
                    <div className="storageBox rearBox">Box</div> */}
                    <div className="tailPipe">tail pipe</div>
                    <div className="taillightJunc"></div>
                    <div className="leftWW"></div>
                    <div className="labelTxt axle">axle</div>
                    <div className="rightWW"></div>
                </div>
            </div>
        </div>
    )
}

export default Taillights