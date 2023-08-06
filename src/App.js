import "./index.css";
import Shape from "./component/Shape";

function App() {
  return (
    <div className="App">
      <Shape backgroundColor="blue" />
      <Shape backgroundColor="orange" />
      <Shape backgroundColor="pink" />
      <Shape backgroundColor="green" />
    </div>
  );
}

export default App;
