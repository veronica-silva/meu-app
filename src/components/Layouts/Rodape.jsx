import { useState } from "react";

const Rodape = () => {
  const [estilos, setEstilos] = useState({
    textAlign: "center",
    textTransform: "uppercase",
    border: "solid red 2px",
  });
  const esconder = () => setEstilos({ display: "none" });
  const exibir = () => setEstilos({ display: "block" });
  return (
    <>
      <p onMouseOver={exibir}>Exibir</p>
      <p onMouseOver={esconder}>Esconder</p>
      <footer style={estilos}>
        <h2>Rodapé</h2>
      </footer>
    </>
  );
};
export default Rodape;
