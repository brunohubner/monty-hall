/* eslint-disable no-unused-vars */
import PortaModel from "../models/PortaModel"
import styles from "../styles/Porta.module.css"
import Presente from "./Presente"

interface IPortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: IPortaProps) {
    const porta = props.value
    const selecionada =
        !!porta.getSelecionada() && !porta.getAberta() ? styles.selecionada : ""

    function alternarSelecao() {
        props.onChange(porta.alternarSelecao())
    }

    function abrir(e: React.MouseEvent<HTMLElement>) {
        e.stopPropagation()
        props.onChange(porta.abrir())
    }

    function renderizarPorta() {
        return porta.getAberta() ? (
            porta.getTemPresente() ? (
                <Presente></Presente>
            ) : (
                false
            )
        ) : (
            <div className={styles.porta} onClick={alternarSelecao}>
                <div className={styles.numero}>{porta.getNumero()}</div>
                <div onClick={abrir} className={styles.macaneta}></div>
            </div>
        )
    }

    return (
        <div className={styles.area}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                {renderizarPorta()}
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}
