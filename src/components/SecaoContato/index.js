import style from './SecaoContato.module.css'

export default function SecaoContato() {
    return (
        <>
            <div className={style.container}>
                <div className={style.containerLogo}>
                    <img src='/logo.png' />
                    <h5>Increase your sales business</h5>
                </div>
                <div className={style.containerInfos}>
                    <div className={style.colunaInfo}>
                        <h2>Sobre nós</h2>
                        <h3>Lorem</h3>
                        <h3>Lorem</h3>
                        <h3>Lorem</h3>
                    </div>
                    <div className={style.colunaInfo}>
                        <h2>Sobre nós</h2>
                        <h3>Lorem</h3>
                        <h3>Lorem</h3>
                        <h3>Lorem</h3>
                    </div>
                    <div className={style.colunaInfo}>
                        <h2>Sobre nós</h2>
                        <h3>Lorem</h3>
                        <h3>Lorem</h3>
                        <h3>Lorem</h3>
                    </div>
                </div>
            </div>

        </>

    )
}