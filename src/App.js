import Header from "./components/Header";
import Distance from "./components/Distance";
import Time from "./components/Time";
import Calculate from "./components/Calculate";
import Result from "./components/Result";
import { useState } from "react";

const App = () => {

  const [distance, setDistance] = useState(0)


  return (
    <div>
      <Header />
      <Distance distanceChosen={distance} distanceSelect={setDistance}/>
      <Time />
      <Calculate />
      <Result />
    </div>
  );
};

export default App;
