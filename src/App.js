import { useState, useEffect, useRef } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)

  const numberRef = useRef(0)

  const buttonRef = useRef()

  const oldCountRef = useRef()

  const zerar = () => {
    if (count !== 0) {
      setCount(0)
    }
  }

  console.log('renderizou')

  console.log(numberRef)

  // não re renderiza o componente
  useEffect(() => {
    // setNumber((prevNumber) => prevNumber + 10)   // <- gera loop infinito
    numberRef.current = Math.random()
  })

  // referência para elementos de DOM
  useEffect(() => {
    console.log(buttonRef.current.click())
  }, [])

  // referência do valor anterior
  useEffect(() => {
    oldCountRef.current = count
  }, [count])

  return (
    <div className="App">
      <h1>o number é: {number}</h1>
      <h2>O contador anterior era: {oldCountRef.current}</h2>
      <h1>O contador é: {count}</h1>
      
      <button 
        ref={buttonRef} 
        onClick={() => setCount((prevCount) => prevCount + 1)}>Adicionar</button>

      <button 
        ref={buttonRef}
        onClick={() => setCount((prevCount) => prevCount - 1)}>Retirar</button>

      <button 
        ref={buttonRef}
        onClick={zerar}>Zerar</button>

      <h1>o número do useRef é: {numberRef.current}</h1>
    </div>
  );
}

export default App;
