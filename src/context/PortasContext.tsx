/* eslint-disable no-unused-vars */
import { ReactNode, useState, createContext, useContext } from "react"

interface IPropsProvider {
    children: ReactNode
}

interface IPortasContextData {
    qtde: number
    portaComPresente: number
    setQtde: (qtde: number) => void
    setPortaComPresente: (novaPortaComPresente: number) => void
}

const PortasContext = createContext({} as IPortasContextData)

export function usePortas() {
    return useContext(PortasContext)
}

export function PortasProvider({ children }: IPropsProvider) {
    const [qtde, setQtdeState] = useState<number>(3)
    const [portaComPresente, setPortaComPresenteState] = useState<number>(1)

    function setQtde(qtde: number) {
        if (qtde < 3 || qtde > 10) return
        setQtdeState(qtde)
    }

    function setPortaComPresente(novaPortaComPresente: number) {
        if (novaPortaComPresente < 1 || novaPortaComPresente > qtde) return
        setPortaComPresenteState(novaPortaComPresente)
    }

    return (
        <PortasContext.Provider
            value={{ qtde, portaComPresente, setQtde, setPortaComPresente }}
        >
            {children}
        </PortasContext.Provider>
    )
}
