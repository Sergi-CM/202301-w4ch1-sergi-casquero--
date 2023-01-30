import "./App.css";
import Gentleman from "./components/Gentleman/Gentleman";
import gentlemenData from "./data/data";

function App() {
  return (
    <div className="App">
      <ul>
        {gentlemenData.map((gentleman) => (
          <Gentleman gentleman={gentleman} key={gentleman.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;
