import Artigo from "../Artigo";
import "./Conteudo.css";
const Conteudo = () => {
  const artigos = [
    {
      id: 1,
      titulo: "artigo 1",
      subtitulo: "sub 1",
      texto: "texto completo do artigo 1",
      curso: "curso de  HTML e CSS",
    },
    {
      id: 2,
      titulo: "artigo 2",
      subtitulo: "sub 2",
      texto: "texto completo do artigo 2",
      curso: "curso de  PHP",
    },
    {
      id: 3,
      titulo: "artigo 3",
      subtitulo: "sub 3",
      texto: "texto completo do artigo 3",
      curso: "curso de  Javascript",
    },
  ];
  return (
    <main>
      <section>
        <h2>Conteúdo...</h2>
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
      {artigos.map((artigo) => (
        <Artigo
          key={artigo.id}
          titulo={artigo.titulo}
          subtitulo={artigo.subtitulo}
          curso={artigo.curso}
        >
          {artigo.texto}
        </Artigo>
      ))}
    </main>
  );
};
export default Conteudo;
