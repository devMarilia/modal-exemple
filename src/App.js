import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainRoutes from "./pages/routes";
import { GlobalStyled } from "./styles/globalStyle";


function App() {
  return (
    <BrowserRouter>
    <GlobalStyled/>
    <Navbar />
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
