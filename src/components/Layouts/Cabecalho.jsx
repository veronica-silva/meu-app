import styled from "styled-components";
import Menu from "../Menu";
const periodo = "diurno";
//tagged template
const StyledCabecalho = styled.header`
  background-color: ${periodo === "diurno" ? "lightblue" : "darkblue"};
  text-align: center;

  h1 {
    color: red;
  }

  p {
    font-weight: bold;
    color: blue;
    font-size: 2rem;
    &:hover {
      color: red;
      cursor: pointer;
    }
  }
`; //depois do ponto vem o nome de uma tag
const Cabecalho = () => {
  return (
    <StyledCabecalho>
      <h1>Inteface React</h1>
      <Menu></Menu>
      <p>Teste</p>
    </StyledCabecalho>
  );
};
export default Cabecalho;
