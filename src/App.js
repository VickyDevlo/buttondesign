import "./App.css";
import Button from "./Components/Button/Button";
import Icons from "./Components/Icons/Icons";

function App() {
  return (
    <div className="App">
      <Button size="sm" variant="primary">
        <Icons />
        Small button
      </Button>

      <Button size="sm" disabled="disabled">
        <Icons />
        disabled button
      </Button>

      <Button size="md" variant="info">
        <Icons />
        Medium button
      </Button>

      <Button size="md" outline="outline">
        <Icons />
        Outline button
      </Button>

      <Button size="lg" variant="danger">
        <Icons />
        Large button
      </Button>

      <Button boxShadow="boxShadow">
        <Icons />
        Small button
      </Button>

      <Button size="sm">
        <Icons style="style"/>
      </Button>
      <Button size="md">
        <Icons style="style"/>
      </Button>
      <Button size="lg">
        <Icons style="style"/>
      </Button>
    </div>
  );
}

export default App;
