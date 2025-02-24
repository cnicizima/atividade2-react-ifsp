import styles from "./SecaoCapa.module.css";

export default function SecaoCapa() {
  return (
    <section>
      <div className={styles.capa}>
        <picture>
          <img src="/bateria.jpg" className={styles.imagem}/>
        </picture>
        <div className={styles.texto}>
          <p>Lorem ipsum</p>
          <h1>Lorem ipsum</h1>
          <p>Lorem ipsum</p>
        </div>
      </div>
    </section>
  );
}
