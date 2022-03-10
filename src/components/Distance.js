import { useState } from "react"

const Distance = ( {distanceChosen, distanceSelect} ) => {

    const [clicked, setClicked] = useState(0);

    const handleButton1 = () => {
        distanceSelect(5)
        setClicked(1)
    }

    const handleButton2 = () => {
        distanceSelect(10)
        setClicked(2)
    }

    const handleButton3 = () => {
        distanceSelect(21)
        setClicked(3)
    }

    const handleButton4 = () => {
        distanceSelect(42)
        setClicked(4)
    }

    const style = {
        backgroundColor: "#ff7424",
    }
    
    return (
        <div className="distance-select">
            <h2>Race Distance</h2>
            <div className="distance-buttons-container">
                <button style={clicked === 1 ? style : null} className="distance-button" onClick={handleButton1}>5km (3.12miles)</button>
                <button style={clicked === 2 ? style : null} className="distance-button" onClick={handleButton2}>10km (6.24miles)</button>
            </div>
            <div className="distance-buttons-container">
                <button style={clicked === 3 ? style : null} className="distance-button" onClick={handleButton3}>21km (Half Marathon)</button>
                <button style={clicked === 4 ? style : null} className="distance-button" onClick={handleButton4}>42k (Marathon)</button>
            </div>
            <h3>Chosen Distance: {distanceChosen}km</h3>
        </div>
    );
};


export default Distance;