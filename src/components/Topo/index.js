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
            <a href="#"><li>Lorem</li></a>
            <a href="#"><li>Lorem</li></a>
            <a href="#"><li>Lorem</li></a>
            <a href="#"><li>Lorem</li></a>
        </ul>
    </header>
  )
}