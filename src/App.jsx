import { useState } from "react";
import Header from "./components/Header";

function App() {
// un hook o usestate no puede ir en un condicional solo despues de la linea previa function

  let [cantidad, setCantidad]=useState(10000);

  cantidad=20000;

  return (
    // Este espacio es solo para presentacion
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header/>    

      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
      />
    </div>
  )
}

export default App
