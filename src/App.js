import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./pages/routes";
import { GlobalStyled } from "./styles/globalStyle";


function App() {
  return (
    <BrowserRouter>
    <GlobalStyled/>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
