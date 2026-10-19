function Exemplo_01() {
    
    /*
     * Math.random():
     * Como esse método retorna um número decimal entre 0 (inclusivo) e 1 (exclusivo), 
     * a chance de o número ser maior ou menor que 0.5 é de exatamente 50%.
     */
    const logado = Math.random() >= 0.5;

    return (
        <div>
            {logado ? <h2>Bem-vindo!</h2> : <h2>Faça Login</h2>}
        </div>
    );

}

export default Exemplo_01;
