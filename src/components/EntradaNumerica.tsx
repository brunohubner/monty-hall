/* eslint-disable no-unused-vars */
import styles from "../styles/EntradaNumerica.module.css"

interface IEntradaNumericaProps {
    text: string
    value: number
    onChange: (newValue: number) => void
}

export default function EntradaNumerica({
    onChange,
    text,
    value
}: IEntradaNumericaProps) {
    function dec() {
        onChange(value - 1)
    }

    function inc() {
        onChange(value + 1)
    }

    return (
        <div className={styles.entradaNumerica}>
            <span className={styles.text}>{text}</span>
            <span className={styles.value}>{value}</span>
            <div className={styles.botoes}>
                <button onClick={dec}>-</button>
                <button onClick={inc}>+</button>
            </div>
        </div>
    )
}
