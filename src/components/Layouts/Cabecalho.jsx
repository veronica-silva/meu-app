import { useState } from "react";
import Menu from "../Menu";

const Cabecalho = () => {
  const exemplo2 = () => {
    console.log("Exemplo 2");
  };

  const [titulo, setTitulo] = useState("Exemplo de State");
  const atualizaTitulo = () => {
    setTitulo(" O state do título foi alterado");
  };
  return (
    <header>
      <button onClick={() => console.log("Exemplo1")}>Exemplo 1</button>
      <button onClick={atualizaTitulo}>Exemplo 2</button>
      <h1>{titulo}</h1>
      <Menu></Menu>
    </header>
  );
};
export default Cabecalho;
