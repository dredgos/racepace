

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
        <div>
            <h2>Race Distance</h2>
            <div>
                <button onClick={handleButton1}>5km (3.12miles)</button>
                <button onClick={handleButton2}>10km (6.24miles)</button>
                <button onClick={handleButton3}>21km (Half Marathon)</button>
                <button onClick={handleButton4}>42k (Marathon)</button>
            </div>
            <h3>Chosen Distance: {distanceChosen}km</h3>
        </div>
    );
};


export default Distance;