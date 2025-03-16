import style from "./Topo.module.css";

export default function Topo() {
  return (
    <header className={style.containerTopo}>
      <div className={style.topo}>
        <div>
          <picture>
            <img src="/logo.png" />
          </picture>
        </div>
        <div className={style.containerLista}>
          <ul className={style.lista}>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#produto">
              <li>Produtos</li>
            </a>
            <a href="#sobre">
              <li>Sobre</li>
            </a>
            <a href="#contato">
              <li>Contato</li>
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
}
