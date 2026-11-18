export function criarPersonagem() {
    return {
        id: crypto.randomUUID(),
        nome: "",
        nivel: 1,
        raca: null,
        classe: null,

        atributos: {
            agilidade: 0,
            forca: 0,
            inteligencia: 0,
            vontade: 0
        },

        recursos: {
            pontosDeVida: 60,
            pontosDeMana: 60
        },
        habilidades: [],
        inventario: [],
        moedas: 500,
        historia: {
            motivacao: "",
            historia: ""
        },

        criadoEm: new Date().toISOString(),
        atualizadoEm: new Date().toISOString()
    };
}