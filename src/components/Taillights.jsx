import React from 'react'
import PhotoCarousel from './Carousel'
import { v4 as uuidv4 } from 'uuid';
import taillights_right_done from 'src/assets/taillights_right_done.webp'
import finished_marker from 'src/assets/finished_marker.webp'
import finished_taillights_wide from 'src/assets/finished_taillights_wide.webp'
import finished_taillights from 'src/assets/finished_taillights.webp'
import left_tail_loom from 'src/assets/left_tail_loom.webp'
import './Taillights.css'
import left_tail_junc from 'src/assets/left_tail_junc.webp'
import right_tail_junc from 'src/assets/right_tail_junc.webp'
import junction from 'src/assets/junction.webp'
import junction2 from 'src/assets/junction2.webp'


const Taillights = () => {

    const taillightImages = [
        {
            src: finished_taillights_wide,
            alt: 'Finished taillight wiring wide shot',
            isVerticle: false,
            id: uuidv4()
        },
        {
            src: finished_taillights,
            alt: 'Finished taillight wiring',
            isVerticle: false,
            id: uuidv4()
        },
        {
            src: taillights_right_done,
            alt: 'Right side taillight wiring',
            isVerticle: true,
            id: uuidv4()
        },
        {
            src: finished_marker,
            alt: 'Finished marker light wiring',
            isVerticle: false,
            id: uuidv4()
        },
        {
            src: left_tail_loom,
            alt: 'Left side taillight wiring and loom routing',
            isVerticle: true,
            id: uuidv4()
        },
        {
            src: left_tail_junc,
            alt: 'Left taillight under bus harness',
            isVerticle: true,
            id: uuidv4()
        },
        {
            src: right_tail_junc,
            alt: 'Right taillight under bus harness',
            isVerticle: true,
            id: uuidv4()
        },
        {
            src: junction,
            alt: 'Junction with factory and trailer harness under bus',
            isVerticle: true,
            id: uuidv4()
        },
        {
            src: junction2,
            alt: 'Junction with factory and trailer harness under bus',
            isVerticle: true,
            id: uuidv4()
        }
    ]

    return (
        <div className='container'>      
      
           <div className="flex key">
           <h2>Under bus</h2>
        <div className="underBus outline">
            <div className="labelTxt leftFrame vertText frame outline">frame</div>
            <div className="labelTxt rightFrame vertText frame outline">frame</div>
            <div className="labelTxt engine">Engine</div>
            <div className="labelTxt trans">Transmission</div>
            <div className="labelTxt fuelTank outline">Fuel Tank</div>
                <div className="livSp outline">
                    {/* <div className="labelTxt lfStorage grayWater">
                        Gray Water 23g
                    </div>
                    <div className="labelTxt storageBox frontBox outline vertText">Box</div>
                    <div className="labelTxt storageBox rearBox outline vertText">Box</div> */}
                    <div className="labelTxt tailPipe outline">tail pipe</div>
                    <div className="muffler outline labelTxt">muffler</div>
                    <div className="taillightJunc"></div>
                    <div className="wheelWell leftWW outline"></div>
                    <div className="labelTxt axle outline">axle</div>
                    <div className="wheelWell rightWW outline"></div>
                </div>
            </div>
                <div className="key flexColumn">
                    <div className='flex alignRight'>Junction =<div className='chartBox'></div></div>
                    <div className="flex alignRight">Taillights =<div className="brownBox"></div></div>
                    <div className="flex alignRight">Left Turn =<div className="yellowBox"></div></div>
                    <div className="flex alignRight">Right Turn =<div className="greenBox"></div></div>
                    <div className="flex alignRight">Stop Lights =<div className="redBox"></div></div>
                    <div className="flex alignRight">Backup =<div className="blueBox"></div></div>
                </div>
                
           </div>
           <div className="imgDiv">
                <PhotoCarousel images={taillightImages}/>               
            </div>
           <div className="instructionsDiv">
           <div className='descriptionTxt'>
                <ol>
                    <li>
                        <h2>Wire Left & Right taillights</h2>
                        <ul>
                        <li>Leave some slack wire at each light fixture. Cover with something to protect from spray foam.</li>
                        <li>Run harness out bottom of the bus to the left frame junction.</li>
                        </ul>
                    </li>
                    <li>
                        <h2>Locate the Factory Light Harness</h2>
                        <ul>
                            <li>Find the factory light harness under the bus on the left frame rail.</li>
                        </ul>
                    </li>

                    <li>
                        <h2>Create Splits for Trailer Wiring</h2>
                        <p>Create splits in the following wires:</p>
                        <ul>
                            <li>Tail lights</li>
                            <li>Left turn signal</li>
                            <li>Right turn signal</li>
                            <li>Stop (brake) lights</li>
                        </ul>
                    </li>

                    <li>
                        <h2>Install Converter Box</h2>
                        <ul>
                            <li>Mount the converter box in a suitable location near the split wires.</li>
                            <li>Connect the split wires to the appropriate inputs on the converter box.</li>
                        </ul>
                    </li>
                    <li>
                        <h2>Fuse Trailer Wires (not required)</h2>
                        <ul>
                            <li>After converter box install an inline fuse for each trailer wire. This will ensure a trailer with bad wiring will not take out vehicles taillights.</li>   
                        </ul>
                    </li>

                    <li>
                        <h2>Run Trailer Wires</h2>
                        <ul>
                            <li>Run the wires from the converter box to the rear of the vehicle where the trailer plug will be installed.</li>
                            <li>Use appropriate gauge wire and ensure proper insulation.</li>
                            <li>Secure the wires along the frame using cable ties or clips to prevent damage.</li>
                        </ul>
                    </li>

                    <li>
                        <h2>Install Trailer Plug</h2>
                        <ul>
                            <li>Mount the trailer plug at the rear of the vehicle.</li>
                            <li>Connect the wires from the converter box to the corresponding terminals on the trailer plug.</li>
                            <li>Ensure a solid ground connection.</li>
                        </ul>
                    </li>
                    
                    <li>
                        <h2>Taillight Wiring</h2>
                        <ul>
                            <li>Locate the tail light harness coming out of each side of the bus.</li>
                            <li>Splice the new taillight wires into this harness.</li>
                            <li>Use appropriate connectors or soldering techniques to ensure secure connections.</li>
                            <li>Insulate all connections with heat shrink tubing or electrical tape.</li>
                        </ul>
                    </li>

                    <li>
                        <h2>Testing</h2>
                        <ul>
                            <li>Test all lights (tail, turn signals, brake) on both the bus and when connected to a trailer.</li>
                            <li>Check for proper function and no interference between circuits.</li>
                        </ul>
                    </li>

                    <li>
                        <h2>Finalize Installation</h2>
                        <ul>
                            <li>Secure any loose wires with cable ties.</li>
                            <li>Double-check all connections and mounting points.</li>
                        </ul>
                    </li>
                </ol>

               
                </div>
           </div>

             
            
        </div>
    )
}

export default Taillights