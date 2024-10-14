import { useState } from "react";
import './Layout.css';

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
            <div className="livingSpace outline">
                <p className="widthTxtLS">89.5"</p>
                <p className="lengthTxtLS">147"</p>
                <div className="bed outline"><span className="bedTxt">Bed</span></div>
                <div className="labelTxt shower outline">Bathroom</div>
                <div className="labelTxt kitchen vertText outline">Kitchen</div>
                <div className="labelTxt closet vertText outline">Refr<br></br>Closet</div>
                <div className="labelTxt vertText seating outline">Seating</div>
                <div className="labelTxt vertText storage outline">Storage</div>
                {!isHidden &&
                    <>
                    <div className="wheelWell leftWW outline"></div>
                    <div className="wheelWell rightWW outline"></div>
                    <div className="fuelNeck outline"></div>
                    <div className="hatch outline"></div>
                    </>
                }
            </div>
        </div>

        <div className="underBusDiv">
            <h2>Under bus layout</h2>
        <div className="underBus outline">
            <div className="labelTxt leftFrame vertText frame outline">frame</div>
            <div className="labelTxt rightFrame vertText frame outline">frame</div>
            <div className="labelTxt engine">Engine</div>
            <div className="labelTxt trans">Transmission</div>
            <div className="labelTxt fuelTank outline">Fuel Tank</div>
                <div className="livSp outline">
                    <div className="labelTxt lfStorage grayWater">
                        Gray Water 23g
                    </div>
                    <div className="labelTxt storageBox frontBox outline vertText">Box</div>
                    <div className="labelTxt storageBox rearBox outline vertText">Box</div>
                    <div className="labelTxt tailPipe outline">tail pipe</div>
                    <div className="muffler outline labelTxt">muffler</div>
                    <div className="wheelWell leftWW outline"></div>
                    <div className="labelTxt axle outline">axle</div>
                    <div className="wheelWell rightWW outline"></div>
                </div>
            </div>
        </div>

        <div className="roofDiv">
            <h2>Roof layout</h2>
            <div className="roof outline">
                <div className="hatch outline"></div>
                <div className="vent outline"></div>
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