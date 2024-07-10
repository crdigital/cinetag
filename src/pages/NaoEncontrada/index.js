import Cabecalho from 'components/Cabecalho';
import styles from './NaoEncontrada.module.css';
import Titulo from 'components/Titulo';

const NaoEncontrada = () => {
    return(
        <>
            <section className={styles.container}>
                <h2>Ops!</h2>
                <p>
                    O conteúdo que você procura, não foi encontrado...
                </p>
            </section>
        </>
    );
}

export default NaoEncontrada;