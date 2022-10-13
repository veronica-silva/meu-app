import { useState } from "react";
import Artigo from "../Artigo";
import "./Conteudo.css";
const Conteudo = () => {
  const [corFundo, setCorFundo] = useState("white");
  const [contador, setContador] = useState(0);

  const fundoClaro = () => {
    setCorFundo("white");
  };
  const fundoNoturno = () => {
    setCorFundo("grey");
  };

  const atualizaContagem = () => setContador(contador + 1);
  return (
    <main style={{ backgroundColor: corFundo }}>
      <button onClick={fundoClaro}>Modo Claro</button>
      <button onClick={fundoNoturno}>Modo Noturno</button>
      <section>
        <h2 onClick={atualizaContagem}>contador: {contador}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          laboriosam tempore molestiae autem nam dolor excepturi numquam nemo
          libero nulla, officiis fugit quis at ad maiores ratione cupiditate
          necessitatibus impedit! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Praesentium cumque facilis omnis deserunt nemo
          veritatis cum. Sunt, esse veniam. Eos qui vero accusamus iusto earum
          sed illo voluptate! Cum, sapiente. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. At quo voluptatum eos omnis et accusamus
          provident, nostrum reprehenderit veniam nihil quae molestiae
          voluptatibus amet! Quis ipsam commodi enim facilis veritatis?
        </p>
      </section>
      <Artigo />
      <Artigo />
      <Artigo />
    </main>
  );
};
export default Conteudo;
