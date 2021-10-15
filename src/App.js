import Header from "./components/Header";
import Distance from "./components/Distance";
import Time from "./components/Time";
import Calculate from "./components/Calculate";
import Result from "./components/Result";
import { useState } from "react";

const App = () => {

  const [distance, setDistance] = useState(0)
  const [time, setTime] = useState(0)
  const [result, setResult] = useState(0)


  return (
    <div>
      <Header />
      <Distance distanceChosen={distance} distanceSelect={setDistance}/>
      <Time timeSelected={setTime}/>
      <Calculate timeDesired={time} distanceChosen={distance} setResult={setResult}/>
      <Result result={result}/>
    </div>
  );
};

export default App;
