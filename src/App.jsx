import "./App.css";

import Developer from "./components/Developer/index.jsx";

// Opção com atribuição de propriedades:

// function App() {
//   const devs = { Nome: "Sarah", Idade: 30, País: "Brasil" };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Developer name={devs.Nome} age={devs.Idade} country={devs.País} />
//       </header>
//     </div>
//   );
// }

//Opção utilizando map percorrendo um array:

function App() {
  const devs = [
    { Nome: "Sarah", Idade: 30, País: "Brasil" },
    { Nome: "Bruna", Idade: 20, País: "Brasil" },
    { Nome: "Álvaro", Idade: 25, País: "Brasil" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        {devs.map((dev) => (
          <Developer name={dev.Nome} age={dev.Idade} country={dev.País} />
        ))}
      </header>
    </div>
  );
}

export default App;
