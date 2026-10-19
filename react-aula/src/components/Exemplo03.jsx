import '../style/style.css'
import sortearNumero from '../util/sorteador.js'

function Exemplo03_CardProduto() {

    const estoque = sortearNumero(0, 10);

    return (
        <div className="card">
            <h2>Exemplo 03: Notebook Dell</h2>
            <p>Estoque: {estoque}</p>
            {
                estoque < 3 && <p>Últimas unidades!</p>
            }
        </div>
    );

}

export default Exemplo03_CardProduto;