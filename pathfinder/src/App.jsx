import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyles";
import Header from "./components/Header/Header";

function App() {

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App;
