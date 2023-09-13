import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyles";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {

  const [ path, setPath ] = useState(window.location.pathname)

  return (


    <>
      <GlobalStyle/>
      {path !== "/login" || path !=="/register" && <Header/>}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App;
