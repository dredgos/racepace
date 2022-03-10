const Result = ({ result }) => {

    let minMile = result / 0.621371192
    let decimal = minMile - Math.floor(minMile)

    return (
        <section className="result-section">
            <h2>Your Required Pace</h2>
            <p>To achieve your goal time you would have to run <span>{Math.floor(result)}mins {((result - Math.floor(result)) * 60).toFixed(0)}secs per km</span> or <span>{Math.floor(minMile)}mins {(decimal * 60).toFixed(0)}secs per mile</span></p>
        </section>
    );
};

export default Result;