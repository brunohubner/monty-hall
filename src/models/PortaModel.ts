/* eslint-disable no-unused-vars */
export default class PortaModel {
    constructor(
        private numero: number,
        private temPresente = false,
        private selecionada = false,
        private aberta = false
    ) {}

    getNumero() {
        return this.numero
    }

    getTemPresente() {
        return this.temPresente
    }

    getSelecionada() {
        return this.selecionada
    }

    getAberta() {
        return this.aberta
    }

    desselecionar() {
        return new PortaModel(this.numero, this.temPresente, false, this.aberta)
    }

    alternarSelecao() {
        return new PortaModel(
            this.numero,
            this.temPresente,
            !this.selecionada,
            this.aberta
        )
    }

    abrir() {
        return new PortaModel(
            this.numero,
            this.temPresente,
            !this.selecionada,
            true
        )
    }
}
