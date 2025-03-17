import style from './Topo2.module.css'

export default function Topo2() {
    return (
        <>
            <header className={style.container}>
                <picture>
                    <img src='/logo.png' className={style.imagem}/>
                </picture>
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
            </header>
        </>
    )
}