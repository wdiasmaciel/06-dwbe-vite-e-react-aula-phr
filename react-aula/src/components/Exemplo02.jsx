import '../style/style.css'

function Exemplo02_CardProduto() {

    const estoque = 8;

    return (
        <div className="card">
            <h2>Notebook Dell</h2>
            <p>Estoque: {estoque}</p>
            {
                estoque > 0 ? 
                  <p className="disponivel">Disponível</p> 
                : 
                  <p className="indisponivel">Indisponível</p>
            }
        </div>
    );

}

export default Exemplo02_CardProduto;