/* const Artigo = (props) => {
  return (
    <article>
      <h3>{props.titulo}</h3>
      <h4>{props.subtitulo}</h4>
      <h5>{props.curso}</h5>
      {props.children}
    </article>
  );
}; */

const Artigo = ({ titulo, subtitulo, curso, children }) => {
  return (
    <article>
      <h3>{titulo}</h3>
      <h4>{subtitulo}</h4>
      <h5>{curso}</h5>
      {children}
    </article>
  );
};

export default Artigo;
