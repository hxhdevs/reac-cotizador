import { useState } from "react";
import Header from "./components/Header";

function App() {
// un hook o usestate no puede ir en un condicional solo despues de la linea previa function

  const [cantidad, setCantidad]=useState(10000);
                 //basicamente setCantidad es la funcion a usar

  function handleChange(e){
      setCantidad(+e.target.value);
  }

  return (
    // Este espacio es solo para presentacion
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header/>    

      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}//esta linea viene siendo el equivalente a las dos lineas que siguen del cierre de function App
      />
      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">{cantidad}</p>
    </div>
  )
}
// const formulario = document.querySelector('.formulario');
// formulario.addEventListener('change');

export default App
