import '../style/style.css'
import sortearNumero from '../util/sorteador.js'
import statusProduto from '../util/status.js'
import CardProduto from './CardProduto'
import produtos from '../data/produtos.js'

function Exemplo07_CardProduto() {

    return (
        <>
            <h1>Exemplo 07</h1>
            <div className="container">
                {produtos.map(produto => {
                    const estoque = sortearNumero(0, 10);
                    const status = statusProduto(estoque);

                    return (
                        <CardProduto
                            key={produto.id}
                            nome={produto.nome}
                            categoria={produto.categoria}
                            preco={produto.preco}
                            estoque={estoque}
                            status={status}
                        />
                    );
                })}
            </div>
        </>
    );

}

export default Exemplo07_CardProduto;

