import "./styles.css";
import { useState } from "react";
import { ChildArea } from "./ChildArea";

export default function App() {
  console.log("Hello");
  const [text, setText] = useState(0);

  return (
    <div className="App">
      <input />
      <br />
      <br />
      <button>表示</button>
      <ChildArea />
    </div>
  );
}
