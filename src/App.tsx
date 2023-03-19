import { useState } from "react";
import { BsFillCalendarXFill } from "react-icons/bs";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>Test</Alert>
      )}
      <ListGroup
        heading="List Group"
        items={["item1", "item2"]}
        onSelectedItem={() => console.log("click")}
      />
      <Button onClick={() => setAlertVisibility(true)} data-bs-dismiss="alert">
        Click me
      </Button>
    </div>
  );
}

export default App;
