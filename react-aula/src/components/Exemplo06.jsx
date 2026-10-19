import '../style/style.css'
import sortearNumero from '../util/sorteador.js'
import statusProduto from '../util/status.js'
import Exemplo04_CardProduto from './Exemplo04'

function Exemplo05_CardProduto() {

    const estoque = sortearNumero(0, 10);
    const produtos = [

        { nome: "Notebook", categoria: "Informática", preco: 4200 },

        { nome: "Mouse", categoria: "Informática", preco: 180 },

        { nome: "Monitor", categoria: "Informática", preco: 1200 }

    ];

    return (
        <>
            <h1>Exemplo 06</h1>
            <div className="container">
                {produtos.map(produto => 
                    <CardProduto
                        nome={produto.nome}
                        categoria={produto.categoria}
                        preco={produto.preco}
                        estoque={estoque}
                    />
                )}
            </div>
        </>
    );

}

export default Exemplo05_CardProduto;