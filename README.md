# 06-dwbe-vite-e-react-aula-phr

Material:

https://app.notion.com/p/Cap-tulo-7-Renderiza-o-Condicional-e-Listas-39644ced362580fe8958d3c591731072

---

## Comandos

```bash
sudo apt update
```

```bash
sudo apt install -y nodejs
```

```bash
node -v
```

```bash
npm install -g npm@11.19.0
```

```bash
npm -v
```

```bash
npm create vite@latest
```

Ao apresentar a mensagem abaixo, pressione a tecla `y`:

```text
Need to install the following packages:
create-vite@9.2.1
Ok to proceed? (y) 
```

Em seguida, informe o nome do projeto. Exemplo:

```text
react-aula
```

Depois, selecione o framework:

```text 
React
```

Na sequência, selecione a linguagem de programação:

```text
JavaScript
```

Na pergunta seguinte, selecione o linter:

```text
ESLint
```
Na pergunta abaixo, pressione a tecla `<ENTER>`, confirmando o `Yes` para a instalação:

```text
◆  Install with npm and start now?
│  ● Yes / ○ No
```

Depois da instalação, entre na pasta do projeto:

```bash
cd react-aula
```

```bash
npm install
```

```bash
npm run dev
```

```bash
git add . && git commit -m "Exemplo" && git push
```

---

# Exercícios 

1. Explique o que é renderização condicional e cite duas situações em que ela é utilizada em aplicações web.

2. Qual é a diferença entre utilizar o operador ternário (`? :`) e o operador lógico `&&` no JSX?

3. Crie um componente que exiba a mensagem **"Aluno aprovado"** quando a média for maior ou igual a 7 e **"Aluno reprovado"** caso contrário.

4. Desenvolva um vetor contendo cinco livros (id, título, autor e preço) e utilize o método `map()` para exibi-los na tela.

5. Pesquise a finalidade da propriedade `key` no React e explique por que o uso do índice do vetor (`index`) não é recomendado em listas dinâmicas.

6. Modifique o Sistema de Gerenciamento de Produtos para exibir apenas os produtos que possuem estoque maior que zero utilizando o método `filter()`.

7. Como desafio, implemente um botão **"Mostrar indisponíveis"** que alterne entre exibir todos os produtos ou apenas aqueles sem estoque. (Dica: esse exercício utilizará os conceitos de `useState` estudados no capítulo anterior.)
