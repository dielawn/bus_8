import { useState } from "react";

const Layout = () => {
    const [isHidden, setIsHidden] = useState(true);

    function handleShowHide() {
        setIsHidden(!isHidden)
    }

    return (
        <div className="flex">
             <div className="livingSpaceDiv">
            <h2>Living space layout</h2>
            <button onClick={() => handleShowHide()}>Show/Hide wheel wells / fuel neck / hatch</button>
            <div className="livingSpace">
                <p className="widthTxtLS">89.5"</p>
                <p className="lengthTxtLS">147"</p>
                <div className="bed"><span className="bedTxt">Bed</span></div>
                <div className="shower">Bathroom</div>
                <div className="kitchen">Kitchen</div>
                <div className="closet">Refr<br></br>Closet</div>
                <div className="seating">Seating</div>
                <div className="storage">Storage</div>
                {!isHidden &&
                    <>
                    <div className="leftWW"></div>
                    <div className="rightWW"></div>
                    <div className="fuelNeck"></div>
                    <div className="hatch"></div>
                    </>
                }
            </div>
        </div>

        <div className="underBusDiv">
            <h2>Under bus layout</h2>
        <div className="underBus">
            <div className="labelTxt leftFrame">frame</div>
            <div className="labelTxt rightFrame">frame</div>
            <div className="labelTxt engine">Engine</div>
            <div className="labelTxt trans">Transmission</div>
            <div className="labelTxt fuelTank">Fuel Tank</div>
                <div className="livSp">
                    <div className="lfStorage">
                        Gray Water 23g
                    </div>
                    <div className="storageBox frontBox">Box</div>
                    <div className="storageBox rearBox">Box</div>
                    <div className="tailPipe">tail pipe</div>
                    <div className="leftWW"></div>
                    <div className="labelTxt axle">axle</div>
                    <div className="rightWW"></div>
                </div>
            </div>
        </div>

        <div className="roofDiv">
            <h2>Roof layout</h2>
            <div className="roof">
                <div className="hatch"></div>
                <div className="vent"></div>
                <div className="solar panel1">Panel</div>
                <div className="solar panel2">Panel</div>
                <div className="solar panel3">Panel</div>
                <div className="solar panel4">Panel</div>
                <div className="gland">Gland</div>
            </div>
        </div>

        </div>
    )
}

export default Layout