import '../style/style.css'
import sortearNumero from '../util/sorteador.js'
import statusProduto from '../util/status.js'
import Exemplo04_CardProduto from './Exemplo04'

function Exemplo05_CardProduto() {

    const estoque = sortearNumero(0, 10);

    return (
        <div className="container">
            <Exemplo04_CardProduto />
            <Exemplo04_CardProduto />
            <Exemplo04_CardProduto />
            <Exemplo04_CardProduto />
            <Exemplo04_CardProduto />
        </div>
    );

}

export default Exemplo05_CardProduto;