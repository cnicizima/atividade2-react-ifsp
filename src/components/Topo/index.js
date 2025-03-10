import style from './Topo.module.css'

export default function Topo() {
  return (
    <header className={style.topo}>
        <div>
          <picture>
            <img src="/logo.png"/>    
          </picture>
        </div>
        <ul className={style.lista}>
            <a href="#"><li>Home</li></a>
            <a href="#produto"><li>Produtos</li></a>
            <a href="#"><li>Sobre</li></a>
            <a href="#"><li>Contato</li></a>
        </ul>
    </header>
  )
}