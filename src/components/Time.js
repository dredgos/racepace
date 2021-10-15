const Time = ({ timeSelected }) => {


    const handleTime = (e) => {
        timeSelected(parseInt(e.currentTarget.value))
    }

    return (
        <div>
            <h2>Desired Time</h2>
            <form>
                <label for="time">Time (mins)</label>
                <input onChange={handleTime} type="number" id="time" name="time"/>
            </form>
        </div>
    );
};

export default Time;