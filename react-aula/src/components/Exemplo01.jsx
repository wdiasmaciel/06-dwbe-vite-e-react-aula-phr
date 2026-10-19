import sortearNumero from '../util/sorteador.js'

function Exemplo01() {
    
    const logado = sortearNumero(0, 1);

    return (
        <div>
            {logado ? <h2>Bem-vindo!</h2> : <h2>Faça Login</h2>}
        </div>
    );

}

export default Exemplo01;
