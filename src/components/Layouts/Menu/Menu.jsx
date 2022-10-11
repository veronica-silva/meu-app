import estilos from "./Menu.module.css";
const Menu = () => {
  return (
    <nav className={`${estilos.nav}`}>
      <a className={`${estilos.links}`} href="http://google.com">
        Home
      </a>
      <a className={`${estilos.links}`} href="http://google.com">
        Produtos
      </a>
      <a className={`${estilos.links}`} href="http://google.com">
        Servicos
      </a>
    </nav>
  );
};

export default Menu;
