import "./App.css";
import Button from "./Components/Button/Button";

function App() {
  return (
    <div className="App">

      <Button size="sm" variant="primary">
        Small button
      </Button>

      <Button size="md" variant="secondary">
        Medium button
      </Button>

      <Button size="lg" variant="danger">
        Large button
      </Button>

    </div>
  );
}

export default App;
