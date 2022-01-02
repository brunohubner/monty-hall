import Card from "../components/Card"
import { usePortas } from "../context/PortasContext"
import styles from "../styles/Home.module.css"
import router from "next/router"
import EntradaNumerica from "../components/EntradaNumerica"
import Head from "next/head"

export default function Home() {
    const { qtde, portaComPresente, setQtde, setPortaComPresente } = usePortas()

    return (
        <>
            <Head>
                <title>Bruno Hubner - Monty Hall</title>
                <meta name="description" content="Monty Hall" />
            </Head>
            <div className={styles.home}>
                <div>
                    <Card bgColor="#c0392c">Monty Hall</Card>
                    <Card>
                        <EntradaNumerica
                            text="Número de Portas"
                            value={qtde}
                            onChange={novaQtde => setQtde(novaQtde)}
                        ></EntradaNumerica>
                    </Card>
                </div>
                <div>
                    <Card>
                        <EntradaNumerica
                            text="Porta Premiada"
                            value={portaComPresente}
                            onChange={novaPortaPremiada =>
                                setPortaComPresente(novaPortaPremiada)
                            }
                        ></EntradaNumerica>
                    </Card>
                    <Card bgColor="#28a085">
                        <button
                            onClick={() => router.push("/game")}
                            className={styles.iniciar}
                        >
                            Iniciar
                        </button>
                    </Card>
                </div>
            </div>
        </>
    )
}
