function App() {
  // Aqui podemos colocar JS y pasarlo al return
  const hola='Hola mundo';
  const auth = false;
  return (
    // Este espacio es solo para presentacion
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      {hola}
      
      {auth? 'autenticado':'no autenticado'}
    </div>
  )
}

export default App
