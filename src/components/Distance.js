

const Distance = ( {distanceChosen, distanceSelect} ) => {

    const handleButton1 = () => {
        distanceSelect(5)
    }

    const handleButton2 = () => {
        distanceSelect(10)
    }

    const handleButton3 = () => {
        distanceSelect(21)
    }

    const handleButton4 = () => {
        distanceSelect(42)
    }

    return (
        <div className="distance-select">
            <h2>Race Distance</h2>
            <div className="distance-buttons-container">
                <button className="distance-button" onClick={handleButton1}>5km (3.12miles)</button>
                <button className="distance-button" onClick={handleButton2}>10km (6.24miles)</button>
                <button className="distance-button" onClick={handleButton3}>21km (Half Marathon)</button>
                <button className="distance-button" onClick={handleButton4}>42k (Marathon)</button>
            </div>
            <h3>Chosen Distance: {distanceChosen}km</h3>
        </div>
    );
};


export default Distance;