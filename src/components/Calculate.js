const Calculate = ({ timeDesired, distanceChosen, setResult }) => {

    const handleClick = () => {
       const splitTime = timeDesired / distanceChosen
       setResult(splitTime)
    }

    return (
        <button onClick={handleClick}>Calculate My Pace</button>
    );
};

export default Calculate;