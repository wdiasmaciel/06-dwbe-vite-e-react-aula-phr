export default function statusProduto(estoque) {

    if (estoque > 0) {
        return "Disponível";
    }

    return "Indisponível";

}