import React from "react";
import ReactDOM from "react-dom/client";

/* const heading = React.createElement("h1", {}, "Hello world"); */
const Hello = () => (
  <div>
    <h1>Helllo</h1>
    <h2>This is h2</h2>
  </div>
);
const Para = () => <p>This is paragraph</p>;


function Greetings() {
  return <h1>Hello this is sreejesh</h1>;
}

const Heading = (
  <main>
    <Hello />
    <Para />
    <Greetings />
  </main>
);
console.log(Heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Heading);
