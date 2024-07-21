import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
function App() {
// un hook o usestate no puede ir en un condicional solo despues de la linea previa function

  const [cantidad, setCantidad]=useState(10000);
                 //basicamente setCantidad es la funcion a usar
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  function handleChange(e){
      setCantidad(+e.target.value);
  }

  function handleClickDecremento(){
    const valor = cantidad-STEP;
    if(valor < MIN){
      alert('Cantidad no valida');
      return;
    } 
    setCantidad(valor)
  }

  function handleClickIncremento(){
    const valor = cantidad+STEP;
    if(valor>MAX){
      alert('Cantidad no valida');
      return;
    } 
    setCantidad(valor)
  }
  return (
    // Este espacio es solo para presentacion
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className="flex justify-between my-6">
        <Button
        operador="-"
        fn={handleClickDecremento}
        />
        <Button
        operador="+"
        fn={handleClickIncremento}
        />
      </div>
      
      <input
        type='range'
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}//esta linea viene siendo el equivalente a las dos lineas que siguen del cierre de function App
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />
      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">{cantidad}</p>
    </div>
  )
}
// const formulario = document.querySelector('.formulario');
// formulario.addEventListener('change');

export default App
