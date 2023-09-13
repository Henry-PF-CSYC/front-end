import Landing from "./components/Landing"
// descomentariar para renderizar componente seccion usuario
// import SeccionUsuario from './components/SeccionUsuario/SeccionUsuario'

import Login from "./components/Login/login"


function App() {
  return (
    <div className="App">

      <Landing/>
      <Login/>

      <Landing/>
      {/* descomentariar para renderizar componente seccion usuario */}
      {/* <SeccionUsuario/> */}

    </div>
  );
}

export default App;
