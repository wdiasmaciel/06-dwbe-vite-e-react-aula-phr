import '../style/style.css'
import sortearNumero from '../util/sorteador.js'

function Exemplo02_CardProduto() {

    const estoque = sortearNumero(0, 10);

    return (
        <div className="card">
            <h2>Exemplo 02: Notebook Dell</h2>
            <p>Estoque: {estoque}</p>
            {
                estoque > 0 ? 
                  <p className="disponivel">Disponível</p> 
                : 
                  <p className="indisponivel">Indisponível</p>
            }
            <p>Preço: R$ 4.200,00</p>
        </div>
    );

}

export default Exemplo02_CardProduto;