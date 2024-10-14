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
            <p>Hatch from rear = ???????????</p>
            <p>Vent from rear = 154.5"</p>
        </div>

        <div className="underBusDiv">
            <h2>Under bus</h2>
          
            <div className="underBus outline">
            <div className="labelTxt leftFrame outline frame vertText">frame</div>
            <div className="labelTxt rightFrame outline frame vertText">frame</div>
            <div className="labelTxt engine">Engine</div>
            <div className="labelTxt trans">Transmission</div>
            <div className="labelTxt fuelTank outline">Fuel Tank</div>
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
            <p>Left front = Length = 56" With = 19" Height = 10" 
            <br></br>or<br></br>
            Lenth = 45" Width 23" Height = 10"
            </p>
        </div>

        <div className="rearDiv">
            <h2>Rear</h2>
            <div className="rearExterior">87"x95"
                <div className="rearDoor">55"x35"</div>
                <div className="rearDoorWindowLwr">14.5"x28.5"</div>
                <div className="rearDoorWindowUpr">19"x28.5"</div>
                <div className="rearDoorHandle"></div>
                {/* <div className="acEvaporator outline">AC Indoor</div> */}
                <div className="rearWindow leftWindow">18"x18"</div>
                <div className="rearWindow rightWindow">18"x18"</div>
                <div className="taillight leftTL"></div>
                <div className="taillight rightTL"></div>
                <div className="turnlight leftTuL"></div>
                <div className="turnlight rightTuL"></div>
                <div className="stopLight leftSL"></div>
                <div className="stopLight rightSL"></div>
                <div className="backup leftBU"></div>
                <div className="backup rightBU"></div>
                <div className="bumper">H 7"</div>
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