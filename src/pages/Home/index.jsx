import styles from './Home.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
// Aqui está importanto o menu e o rodape

function Home ()
{
    return(
        <>
        <Header />
        <section className={styles.container}>
            <div className={styles.apresentacao}>
                <p className={styles.para}>
                    Olá sejam bem vindos! <br />
                    <span></span> <br />
                </p>
                <button className={styles.btn}>Saiba mais sobre mim..</button>
            </div>
            <figure>
                <img className={styles.img} src="/undraw_educator.svg" alt="Imagem da Home" />
            </figure>
        </section>
        <Footer />
        </>
        
    )
}
export default Home