// Componentes importados
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";

// Ruteado
import {Routes, Route} from "react-router-dom"

import Login from "./components/Login/login"
=======


function App() {
  return (
    <div className="App">

      <Navbar/>
        <Routes>
          <Route path="/" element={<Landing/>}/>
        </Routes>  
      <Footer/> 
=======

      <Landing/>   
      <Login/>

=======
      <Landing/>

    </div>
  );
}

export default App;
