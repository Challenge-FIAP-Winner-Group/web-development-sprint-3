import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyles";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App;
