import '../style/style.css'
import statusProduto from '../util/status.js'
import CardProduto from './CardProduto'
import produtos from '../data/produtos.js'

function Exemplo07_CardProduto() {

    return (
        <>
            <h1>Exemplo 07</h1>
            <div className="container">
                {produtos.map(produto => {
                    return (
                        <CardProduto
                            key={produto.id}
                            nome={produto.nome}
                            categoria={produto.categoria}
                            preco={produto.preco}
                            estoque={produto.estoque}
                            status={statusProduto(produto.estoque)}
                        />
                    );
                })}
            </div>
        </>
    );

}

export default Exemplo07_CardProduto;

