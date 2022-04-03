import React, { useImperativeHandle, useRef, useState } from "react";

const TextComponent = React.forwardRef((props, ref) => {
  const inputValue = useRef("");
  const render = useRef(0);
  const [text, setText] = useState("");
  useImperativeHandle(
    ref,
    () => ({
      getText: () => inputValue.current
    }),
    [inputValue.current]
  );

  const sendData = () => {
    alert(`input değeri : ${inputValue?.current}`);
  };
  return (
    <div>
      <p>Text input render sayısı :{render.current++} </p>
      <input
        type="email"
        name="bday"
        value={inputValue.current.value}
        // value={text}
        onChange={(e) => {
          inputValue.current = e.target.value;
          // setText(e.target.value);
        }}
      />
      <button onClick={sendData}>gönder</button>
    </div>
  );
});

export default TextComponent;
