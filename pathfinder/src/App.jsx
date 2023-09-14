import { Outlet, useLocation } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyles";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {

  const location = useLocation();

  const routeChange = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      <GlobalStyle/>
      {!routeChange && <Header/>}

      <Outlet/>
      
      {!routeChange && <Footer/>}
    </>
  )
}

export default App;
