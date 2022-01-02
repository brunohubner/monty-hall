import { ReactNode } from "react"
import styles from "../styles/Card.module.css"

interface ICardProps {
    bgColor?: string
    children?: ReactNode
}

export default function Card({ bgColor, children }: ICardProps) {
    return (
        <div
            className={styles.card}
            style={{ backgroundColor: bgColor || "#fff" }}
        >
            {children}
        </div>
    )
}
