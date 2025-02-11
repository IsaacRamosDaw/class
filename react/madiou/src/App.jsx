import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //? React fonctionne de manière assez similaire à JavaScript. En réalité, tu peux souvent écrire du code JavaScript
  //? qui fait déjà ce que tu veux sans utiliser les outils spécifiques à React. Sa "logique" est très proche de celle de JavaScript, mais avec une syntaxe un peu différente. 
  //? Tu peux créer une variable normale comme celle-ci :

  const firstVariable = 1;
  let secondVariable = 2;

  //? C'est pareil qu'en JavaScript. Mais il est probable que ces variables subissent des modifications, comme changer leur contenu ou effectuer des opérations avec elles.
  //? La première étape est de comprendre comment ces variables sont créées dans React.
  //? Tu te souviens de "addEventListener", qui est une méthode ou un outil de JavaScript ?
  //? En React, il existe "useState". Cela te permet de créer une variable, ainsi qu'une fonction pour changer cette variable.
  //? C'est la façon la plus basique de créer une variable avec React. Ce qui est bien, c'est que la première page de React et Vite te montre déjà comment le faire.
  //! Important : React est un framework basé sur JavaScript. Même si certaines choses sont modifiées, presque tout ce que tu vois est du JavaScript d'une manière ou d'une autre.

  const [count, setCount] = useState(0)

  //? Le "count" représente la variable, c'est comme un "const count = 0". La deuxième partie est la fonction "function setCount(){}".
  //? Et "useState" est le nom du "hook". En React, les "hooks" sont les outils pour utiliser JavaScript.
  //? "useState(0)" représente la valeur initiale de la variable.
  
  //* Exemple avec une chaîne de caractères (string)

	const [name, setName] = useState("madiou") 

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
			{/* Si tu ne comprends pas la logique ci-dessous, pourquoi il y a un "number" suivi d'un autre "number", c'est normal. Je t'explique. */}
          count is {count}
        <button onClick={() => setCount((number) => number + 1)}>Augmenter</button>
        <button onClick={() => setCount((number) => number - 1)}>Réduire</button>

				{/* 
					En appelant setCount(), tu exécutes une fonction.

					Le "number" dans setCount((number)) représente la variable correspondant au nombre.
					Littéralement, tu vois ceci : setCount((valeurDeLaVariableCount) =>). Si tu remarques, c'est une "arrowFunction".
					
					Ensuite, c'est ce qui se passe à l'intérieur de la fonction : ((valeurDeLaVariableCount) => valeurDeLaVariableCount + 1).				
				 */}
        <p>
          Modifie <code>src/App.jsx</code> et sauvegarde pour tester HMR.
        </p>
      </div>
      <p className="read-the-docs">
        Clique sur les logos Vite et React pour en savoir plus.
      </p>
			<h4>{name}</h4>
			<button onClick={() => setName("Isaac")}>Changer Isaac</button>
			<button onClick={() => setName("Madiou")}>Changer Madiou</button>
			{/*? React fonctionne de manière que si tu fais une erreur de logique, la page plante. Décommente la ligne ci-dessous. */}
			{/* <button onClick={setName("Error")}>Erreur</button> */}
    </>
  )
}

export default App
