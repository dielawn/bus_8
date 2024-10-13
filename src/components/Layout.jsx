import { useState } from "react";

const Layout = () => {
    const [isHidden, setIsHidden] = useState(true);

    function handleShowHide() {
        setIsHidden(!isHidden)
    }

    return (
        <div>
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
        </div>
    )
}

export default Layout