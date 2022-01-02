import PortaModel from "../models/PortaModel"

export function criarPorta(
    qtde: number,
    portaComPresente: number
): PortaModel[] {
    return Array.from({ length: qtde }, (_, i) => {
        const numero = i + 1
        const temPresente = numero === portaComPresente
        return new PortaModel(numero, temPresente)
    })
}

export function atualizarPortas(
    portas: PortaModel[],
    portaModificada: PortaModel
): PortaModel[] {
    return portas.map(portaAtual => {
        const igualAModificada =
            portaAtual.getNumero() === portaModificada.getNumero()
        if (igualAModificada) return portaModificada
        return portaModificada.getAberta()
            ? portaAtual
            : portaAtual.desselecionar()
    })
}
