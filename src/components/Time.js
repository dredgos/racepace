import { useState } from "react";

const Time = ({ timeSelected }) => {

    const [slider, setSlider] = useState(0)

    const handleTime = (e) => {
        timeSelected(parseInt(e.currentTarget.value))
        setSlider(e.currentTarget.value)
    }

    const convertMinsToHours = (value) => {
        const hours = Math.floor(value / 60)
        const mins = value % 60
        if (hours === 1) {
            return `${hours} hour and ${mins} minutes`
        } else {
            return `${hours} hours and ${mins} minutes`
        }
    }

    return (
        <section className="time-select">
            <h2 className="time-title">Desired Time</h2>
            <form className="time-input">
                <label for="time">Time</label>
                <input className="time-slider" onChange={handleTime} type="range" id="time" value="0" name="time" min="0" max="360" step="1"/>
            </form>
            {slider < 60 ? <p>{slider} Minutes</p> : <p>{convertMinsToHours(slider)}</p>}
        </section>
    );
};

export default Time;