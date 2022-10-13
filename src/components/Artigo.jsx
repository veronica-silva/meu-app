const Artigo = (props) => {
  return (
    <article>
      <h3>{props.titulo}</h3>
      {props.children}
    </article>
  );
};

export default Artigo;
