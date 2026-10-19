import '../style/style.css'
import sortearNumero from '../util/sorteador.js'
import statusProduto from '../util/status.js'

function Exemplo04_CardProduto() {

    const estoque = sortearNumero(0, 10);

    return (
        <div className="container">
            <div className="card">
                <h2>Exemplo 04: Notebook Dell</h2>
                <p>Estoque: {estoque}</p>
                <p>{statusProduto(estoque)}</p>
            </div>
        </div>
    );

}

export default Exemplo04_CardProduto;