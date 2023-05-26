import React from "react";
import ListGroup from "./components/ListGroup"; //referencing the index file
import Alert from "./components/Alert";
import CssinJSWithStyledComponents from "./components/styling/CssinJSWithStyledComponents";
import UpdatingObjects from "./components/component-state/UpdatingObjects";
import AdvancedExample from "./components/component-state/AdvancedExample";

function App() {
  const items = ["san fransisco", "japan", "usa", "srilanka"];

  const showItem = () => {
    console.log("item selected");
  };

  return (
    <div>
      <ListGroup items={items} heading="Nandika List" showItem={showItem} />
      <Alert>
        Hi <h3>bro</h3> nandika
      </Alert>
      <CssinJSWithStyledComponents />
      <UpdatingObjects />
      <AdvancedExample />
    </div>
  );
}

export default App;
