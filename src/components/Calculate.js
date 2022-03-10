const Calculate = ({ timeDesired, distanceChosen, setResult }) => {

    const handleClick = () => {
       const splitTime = timeDesired / distanceChosen
       setResult(splitTime)
    }

    return (
        <div className="calculate">
            <button onClick={handleClick}>Calculate My Pace</button>
        </div>
    );
};

export default Calculate;