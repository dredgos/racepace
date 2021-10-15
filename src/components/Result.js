const Result = ({ result }) => {

    let minMile = result / 0.621371192
    let decimal = minMile - Math.floor(minMile)

    return (
        <div>
            <h2>Your Required Pace</h2>
            <p>{Math.floor(result)} mins {((result - Math.floor(result)) * 60).toFixed(0)} secs per km</p>
            <p>{Math.floor(minMile)} mins {(decimal * 60).toFixed(0)} secs per mile</p>
        </div>
    );
};

export default Result;