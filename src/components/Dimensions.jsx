import './Dimensions.css'
const Dimensions = () => {

    return (
       <div className="container">

        <div className="livingSpaceDiv">
            <h2>Living space</h2>
            <div className="livingSpace outline">
                <p className="widthTxtLS">89.5"</p>
                <p className="lengthTxtLS">147"</p>
                <p>⇧ front ⇧</p>
                <div className="wheelWell leftWW outline"></div>
                <div className="wheelWell rightWW outline"></div>
                <div className="fuelNeck outline"></div>
            </div>
            <p>Length = 147" Width = 89.5"</p>
            <p>Wheel wells from rear 54-87"</p>
            <p>Fuel neck from rear 109-118"</p>
        </div>

        <div className="roofDiv">
            <h2>Roof</h2>           
            <div className="roof outline">
                <p className="widthTxtRoof">⇧ front ⇧ <br></br> 96"</p>
                <p className="lengthTxtRoof">180"</p>
                <div className="hatch outline"></div>
                <div className="vent outline"></div>
                
            </div>
            <p>Length = 180" Width 96"</p>
            <p>Vent from rear = 154.5"</p>
        </div>

        <div className="underBusDiv">
            <h2>Under bus</h2>
          
            <div className="underBus outline">

            <div className="cabLabel labelTxt">Cab</div>
            <div className="livingAreaLabel labelTxt">Living area</div>
   
            <div className="labelTxt leftFrame outline frame vertText">frame</div>
            <div className="labelTxt rightFrame outline frame vertText">frame</div>
            <div className="labelTxt engine">Engine</div>
            <div className="labelTxt trans">Transmission</div>
            <div className="labelTxt fuelTank outline">Fuel Tank</div>
            <div className="leafSprings leftLS outline"></div>
            <div className="leafSprings rightLS outline"></div>
                <div className="livSp outline">
                    {/* <div className="grayWater">
                        Gray Water 23g
                    </div>
                    <div className="storageBox outline frontBox vertText">Box</div>
                    <div className="storageBox outline rearBox vertText">Box</div> */}
                    <div className="tailPipe outline labelTxt">tail pipe</div>
                    <div className="muffler outline labelTxt">muffler</div>
                    <div className="wheelWell leftWW outline"></div>
                    <div className="labelTxt axle outline">axle</div>
                    <div className="wheelWell rightWW outline"></div>
                    <div className="rearFrame outline"></div>
                </div>
            </div>
            <p>Front space between body and frame LWH 56" x 19" x 10" 
            <br></br>or<br></br>
            45" x 23" x 10"
            </p>
        </div>

        <div className="rearDiv">
            <h2>Rear</h2>
            <div className="rearExterior outline">87"x95"
                <div className="rearDoor outline">55"x35"</div>
                <div className="rearDoorWindowLwr outline">14.5"x28.5"</div>
                <div className="rearDoorWindowUpr outline">19"x28.5"</div>
                <div className="rearDoorHandle outline"></div>
                {/* <div className="acEvaporator outline">AC Indoor</div> */}
                <div className="rearWindow leftWindow outline">18"x18"</div>
                <div className="rearWindow rightWindow outline">18"x18"</div>
                <div className="taillight leftTL outline"></div>
                <div className="taillight rightTL outline"></div>
                <div className="turnlight leftTuL outline"></div>
                <div className="turnlight rightTuL outline"></div>
                <div className="stopLight leftSL outline"></div>
                <div className="stopLight rightSL outline"></div>
                <div className="backup leftBU outline"></div>
                <div className="backup rightBU outline"></div>
                <div className="bumper outline">H 7"</div>
            </div>
        </div>

        {/* <div className="frontDiv">
            <h2>Front</h2>
        </div>

        <div className="bedDiv">
            <h2>Bed</h2>
            <p>Width = 54" Length = 75" Height = 26"</p>
        </div> */}

        

       </div>
        
    )
}

export default Dimensions