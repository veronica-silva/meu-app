import Artigo from "../Artigo";
import "./Conteudo.css";
import Alert from "react-bootstrap/Alert";
const Conteudo = () => {
  return (
    <main>
      <section>
        <Alert variant="primary">
          <h2>Conteúdo...</h2>
        </Alert>
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
