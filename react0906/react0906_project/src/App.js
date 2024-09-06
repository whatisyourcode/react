import "./App.css";
import { useState } from "react";
import Controller from "./component/Controller";
import Viewer from "./component/Viewer";

function App() {
  const [count,setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  }

  return (
    <div className="App">
      <section>
      <Viewer count={count}/>
      </section>
      <section>
      </section>
      <section>
      <Controller handleSetCount={handleSetCount} />
      </section>
        </div>
  );
}
export default App;
