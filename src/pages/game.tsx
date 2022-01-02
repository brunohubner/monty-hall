/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react"
import Porta from "../components/Porta"
import { usePortas } from "../context/PortasContext"
import { atualizarPortas, criarPorta } from "../functions/portas"
import PortaModel from "../models/PortaModel"
import styles from "../styles/Game.module.css"

export default function Game() {
    const { qtde, portaComPresente } = usePortas()
    const [portas, setPortas] = useState<PortaModel[]>([])

    useEffect(() => {
        setPortas(criarPorta(qtde, portaComPresente))
    }, [])

    function renderizarPortas() {
        return portas.map(porta => (
            <Porta
                key={porta.getNumero()}
                value={porta}
                onChange={novaPorta =>
                    setPortas(atualizarPortas(portas, novaPorta))
                }
            ></Porta>
        ))
    }

    return (
        <>
            <Head>
                <title>Bruno Hubner - Monty Hall</title>
                <meta name="description" content="Monty Hall" />
            </Head>
            <div className={styles.game}>
                <div className={styles.portas}>{renderizarPortas()}</div>
                <div className={styles.botoes}>
                    <Link href="/" passHref>
                        <button>Reiniciar Game</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
