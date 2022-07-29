import { api } from '../services/api';

export const dadosRefinados = [];

export const gerenciar = {
    pegarDados: async () => {
        await api.get('/search?id=712828104040513607', {

        }).then((response) => {
            let dadosBrutos = response.data.data[0];

            Object.keys(dadosBrutos).forEach(function (item) {
                dadosRefinados.push(dadosBrutos[item]);
            });
        })
    }
}