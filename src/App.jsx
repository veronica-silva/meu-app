import Cabecalho from "./components/Layouts/Cabecalho";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Servicos from "./pages/Servicos";
import Rodape from "./components/Layouts/Rodape";

const App = () => {
  return (
    <>
      <Cabecalho />
      <Home />
      <Produtos />
      <Servicos />
      <Rodape />
    </>
  );
};

export default App;
