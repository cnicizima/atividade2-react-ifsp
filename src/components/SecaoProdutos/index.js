import style from './SecaoProdutos.module.css'

export default function SecaoProdutos() {
    return (
        <>
        <div className={style.containerTexto}>
            <h1>Lorem Ipsum passage</h1>
            <h3>Lorem Ipsum passageLorem Ipsum passageLorem Ipsum passageLorem Ipsum passageLorem Ipsum passageLorem</h3>
        </div>
        <div className={style.gridFotos}>
            <picture className={style.containerImagem}>
                <h1>Tama1</h1>
                <img src="/tama1.jpg" className={style.imagem}/>
                <h1>R$ 25.000,00</h1>
            </picture>
            <picture>
                <h1>Tama1</h1>
                <img src="/tama2.jpg" className={style.imagem}/>
                <h1>R$ 25.000,00</h1>
            </picture>
            <picture>
                <h1>Tama1</h1>
                <img src="/tama3.jpg" className={style.imagem}/>
                <h1>R$ 25.000,00</h1>
            </picture>
            <picture>
                <h1>Tama1</h1>
                <img src="/tama4.jpg" className={style.imagem}/>
                <h1>R$ 25.000,00</h1>
            </picture>            
        </div>
        </>
    )
}
