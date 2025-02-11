import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //? React funciona bastante igual que javascript, la verdad que muchas veces puedes crear código js que ya puede hacer directamente lo que quieras sin usar 
  //? las cosas que haces en react, su "lógica" son muy parecidas a javascript, pero con una sintaxis un poco diferente. Puedes crear una variable normal y corriente como esta:

  const firstVariable = 1;
  let secondVariable = 2;

  //? Es igual que en javascript. Pero es probable que estas variables sufran algunos cambios, ya puede ser cambiar el contenido o hacer operaciones con ellas
  //? el primer paso es entender cómo se crean las variables en 

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
