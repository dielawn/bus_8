const Dimensions = () => {

    return (
       <div className="dimensionsDiv marginLeft">

        <div className="livingSpaceDiv">
            <h2>Living space</h2>
            <p>Length = 147" Width = 89.5"</p>
            <p>Wheel wells from rear 54-87"</p>
            <p>Fuel neck from rear 109-118"</p>
            <div className="livingSpace">
                <p className="widthTxtLS">89.5"</p>
                <p className="lengthTxtLS">147"</p>
                <p>⇧ front ⇧</p>
                <div className="leftWW"></div>
                <div className="rightWW"></div>
                <div className="fuelNeck"></div>
            </div>
        </div>

        <div className="roofDiv">
            <h2>Roof</h2>
            <p>Length = 180" Width 96"</p>
            <p>Hatch from rear = ???????????</p>
            <p>Vent from rear = 154.5"</p>

            
            <div className="roof">
                <p className="widthTxtRoof">⇧ front ⇧ <br></br> 96"</p>
                <p className="lengthTxtRoof">180"</p>
                <div className="hatch"></div>
                <div className="vent"></div>
                
            </div>
        </div>

        <div className="underBusDiv">
            <h2>Under bus</h2>
            <p>Left front = Length = 56" With = 19" Height = 10" 
            <br></br>or<br></br>
            Lenth = 45" Width 23" Height = 10"
            </p>
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
                    <div className="leftWW"></div>
                    <div className="labelTxt axle">axle</div>
                    <div className="rightWW"></div>
                </div>
            </div>
        </div>

        <div className="rearDiv">
            <h2>Rear</h2>
        </div>

        <div className="frontDiv">
            <h2>Front</h2>
        </div>

        <div className="bedDiv">
            <h2>Bed</h2>
            <p>Width = 54" Length = 75" Height = 26"</p>
        </div>

        

       </div>
        
    )
}

export default Dimensions