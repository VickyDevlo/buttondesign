import "./App.css";
import Button from "./Components/Button/Button";

function App() {
  return (
    <div className="App">
      
      <Button size="sm" variant="primary">
        Small button
      </Button>

      <Button size="md" variant="info">
        Medium button
      </Button>

      <Button size="lg" variant="warning">
        Large button
      </Button>

      <Button size="md" outline="outline">
        Large button
      </Button>

      <Button size="sm" disabled="disabled">
        Large button
      </Button>

    </div>
  );
}

export default App;
