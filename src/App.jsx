import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
all: unset;
border-radius: 10px;
background-color: green;
color: white;
padding: 20px 50px;
align-text: center;`;

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button onClick={() => setCount(count + 1)}>Teste</Button>
      <span>{count}</span>
    </div>
  );
};

export default App;
