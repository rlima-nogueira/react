import React, { useState } from 'react';

function Exemplo() {

  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter+1);
  }
  function incrementDoisEmDois() {
    setCounter(counter+2);
  }

  function decrementar() {
    setCounter(counter-1);
  }

  return (
    <div>
      <h1>Contador usando State: {counter} </h1>
 
      <button onClick={increment}>Incrementar</button>
      <button onClick={incrementDoisEmDois}>Incrementar de 2 em 2</button>
      <button onClick={decrementar}>Decrementar</button>



    </div>
  );
}

export default Exemplo;
