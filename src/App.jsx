import Cabecalho from "./components/Layouts/Cabecalho/Cabecalho";
import Conteudo from "./components/Layouts/Conteudo/Conteudo";
import Rodape from "./components/Layouts/Rodape/Rodape";

const App = () => {
  return (
    <>
      <Cabecalho />
      <Conteudo></Conteudo>
      <Rodape />
    </>
  );
};

export default App;
