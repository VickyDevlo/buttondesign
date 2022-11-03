import "./App.css";
import Button from "./Components/Button/Button";
import Icons from "./Components/Icons/Icons";
import { BiEdit } from "react-icons/bi";

function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        <Button size="sm" variant="primary" textColor="primary">
          <Icons>
            <BiEdit />
          </Icons>
          Small button
        </Button>
        <Button size="sm" outline="outlineprimary" textColor="textprimary">
          <Icons>
            <BiEdit />
          </Icons>
          Small button
        </Button>
        <Button size="sm" boxShadow="boxShadow" textColor="textprimary">
          Small button
        </Button>
        <Button size="sm">
          <Icons Iconsize="iconsm" Iconvariant="primaryIcon">
            <BiEdit />
          </Icons>
        </Button>
      </div>
      <div className="Wrapper">
        <Button size="md" variant="success">
          <Icons>
            <BiEdit />
          </Icons>
          Medium button
        </Button>

        <Button size="md" outline="outlinesuccess" textColor="textsuccess">
          <Icons>
            <BiEdit />
          </Icons>
          Medium button
        </Button>
        <Button size="md" boxShadow="boxShadow" textColor="textsuccess">
          Medium button
        </Button>
        <Button size="md">
          <Icons Iconsize="iconmd" size="md" Iconvariant="textsuccess">
            <BiEdit />
          </Icons>
        </Button>
      </div>
      <div className="Wrapper">
        <Button size="lg" variant="danger" textColor="danger">
          <Icons>
            <BiEdit />
          </Icons>
          Large button
        </Button>
        <Button size="lg" outline="outlinedanger" textColor="textdanger">
          <Icons>
            <BiEdit />
          </Icons>
          Large button
        </Button>
        <Button size="lg" boxShadow="boxShadow" textColor="textdanger">
          Large button
        </Button>
        <Button size="lg">
          <Icons Iconsize="iconlg" Iconvariant="dangerIcon">
            <BiEdit />
          </Icons>
        </Button>
      </div>
    </div>
  );
}

export default App;
