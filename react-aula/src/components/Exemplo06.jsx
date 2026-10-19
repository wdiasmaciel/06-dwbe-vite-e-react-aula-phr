import '../style/style.css'
import sortearNumero from '../util/sorteador.js'
import statusProduto from '../util/status.js'
import CardProduto from './CardProduto'

function Exemplo06_CardProduto() {

    const produtos = [

        { nome: "Notebook", categoria: "Informática", preco: 4200 },

        { nome: "Mouse", categoria: "Informática", preco: 180 },

        { nome: "Monitor", categoria: "Informática", preco: 1200 }

    ];

    return (
        <>
            <h1>Exemplo 06</h1>
            <div className="container">
                {produtos.map(produto => {
                    const estoque = sortearNumero(0, 10);
                    const status = statusProduto(estoque);

                    return (
                        <CardProduto
                            key={produto.nome}
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

export default Exemplo06_CardProduto;
