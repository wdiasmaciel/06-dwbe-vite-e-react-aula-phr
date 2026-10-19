import "../styles/style.css";

function CardProduto({ nome, categoria, preco, estoque }) {

    return (
        <div className="card">
            <h2>{nome}</h2>
            <p>{categoria}</p>
            <p>Preço: R$ {preco}</p>
            <p>Estoque: {estoque}</p>
        </div>
    );

}

export default CardProduto;