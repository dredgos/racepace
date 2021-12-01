import Header from "./Header";
import Distance from "./Distance";
import Time from "./Time";
import Calculate from "./Calculate";
import Result from "./Result";
import { useState } from "react";
import "../styles/main.scss";

const App = () => {

  const [distance, setDistance] = useState(0)
  const [time, setTime] = useState(0)
  const [result, setResult] = useState(0)


  return (
    <main class="page-wrapper">
      <Header />
      <Distance distanceChosen={distance} distanceSelect={setDistance}/>
      <Time timeSelected={setTime}/>
      <Calculate timeDesired={time} distanceChosen={distance} setResult={setResult}/>
      <Result result={result}/>
    </main>
  );
};

export default App;
