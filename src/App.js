import "./styles.css";
import TextInputComponent from "./input";
import { useRef } from "react";

export default function App() {
  const inputRef = useRef();

  const showText = () => {
    alert(`Text : ${inputRef.current.getText()}`);
  };
  return (
    <div className="App">
      <TextInputComponent ref={inputRef} />
      <button onClick={showText}>Texti göster</button>
    </div>
  );
}
