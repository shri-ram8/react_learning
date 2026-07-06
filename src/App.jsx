import { useState } from "react"

function App()
{
  
    const [counter , useCounter]=useState(0);
    return(

      <>
      <h1>Counter app</h1>
      <h2>{counter}</h2>
      <button>Increment</button>

      </>
    );
}
export default App;