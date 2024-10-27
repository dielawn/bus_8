import './Floor.css'
const Floor = () => {

    return (
        <div>
             <div className="underBus outline">

            <div className="labelTxt leftFrame outline frame vertText">frame</div>
            <div className="labelTxt rightFrame outline frame vertText">frame</div>
            <div className="labelTxt fuelTank outline">Fuel Tank</div>
            <div className="leafSprings leftLS outline"></div>
            <div className="leafSprings rightLS outline"></div>
            <div className="burner outline floorCol2 burnerLoc"></div>
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
             <div className="livingSpace outline">
             <div className="labelTxt shower outline">Bathroom</div>
                <div className="wheelWell leftWW outline"></div>
                <div className="wheelWell rightWW outline"></div>


               <div className="pexHe pexPipe pipe1"></div>
               <div className="pexHe pexPipe pipe2"></div>

               
            </div>
                        <div className="legend outline grid">
                          <div className='floorCol1'>Heated Floor In & Out</div>  <div className="floorCol2 pexPipe legendPipe"></div>
                          <div className='floorCol1'>Gas Burner</div><div className="burner outline floorCol2"></div>
                        </div>
        </div>
    )
}

export default Floor