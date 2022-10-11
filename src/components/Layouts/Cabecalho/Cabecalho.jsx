import Menu from "../Menu/Menu";
const estilo = {
  color: "white",
  backgroundColor: "darkgrey",
};
const Cabecalho = () => {
  return (
    <header style={{ backgroundColor: "lightblue", textAlign: "center" }}>
      <h1 style={estilo}>Inteface React</h1>
      <Menu></Menu>
    </header>
  );
};
export default Cabecalho;
