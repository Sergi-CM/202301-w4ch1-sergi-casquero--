import "./App.css";
import Gentleman from "./components/Gentleman/Gentleman";
import gentlemenData from "./data/data";

function App() {
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <p className="info">0 gentlemen pointing at you</p>
        <button className="button button--select">Select all</button>
      </section>
      <main className="main">
        <ul>
          {gentlemenData.map((gentleman) => (
            <Gentleman gentleman={gentleman} key={gentleman.id} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
