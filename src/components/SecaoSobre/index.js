import style from './SecaoSobre.module.css'

export default function SecaoSobre() {
    return (
        <>
            <section>
                <div className={style.textoContainer}>
                    <h1>Lorem Lorem Lorem</h1>
                    <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                </div>
            </section>
            <div className={style.gridContainer}>
                <div>
                    <img src='/tama5.jpg' />
                </div>
                <div>
                    <h1>Lorem Lorem Lorem</h1>
                    <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                </div>
                <div>
                    <h1>Lorem Lorem Lorem</h1>
                    <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                </div>
                <div>
                    <img src='/tama5.jpg' />
                </div>
            </div>
        </>
    )
}