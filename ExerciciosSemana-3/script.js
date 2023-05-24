// //Exercicio if/else


const condicional = () => {
    let number = 14;
    let number2 = 15;
    let result = number + number2;

    if (result === 20) {
        return true;
    } else {
        return false;
    }
}
console.log(condicional());

// //Exercicio Switch case
const codigoOperacao = prompt("Digite o código da operação:");

switch (codigoOperacao) {
  case "1":
    console.log("Realizando ação 1...");
    // Código para executar a ação 1
    break;

  case "2":
    console.log("Realizando ação 2...");
    // Código para executar a ação 2
    break;

  case "3":
    console.log("Realizando ação 3...");
    // Código para executar a ação 3
    break;

  default:
    console.log("Código de operação inválido.");
    // Código para tratar a situação de código inválido
    break;
}


// //Exercicio FOR

for (let i = 0; i <10; i++) {
    console.log(i);
}


//Exercicio while

let numero = parseInt(prompt("Digite um número positivo: "));
let soma = 0;
let contador = 1;

while (contador <= numero) {
  soma += contador;
  contador++;
}

console.log("A soma de todos os números inteiros positivos até", numero, "é:", soma);


// Exercicio DoWhile
let counter = 1;

do {
  console.log("counter:", counter);
  counter++;
} while (counter <= 5);



//Exercicio Inteval



function exibirMensagem() {
    let h1 = document.createElement('h1')
   let msg =  h1.innertext = "Hello World!";


    console.log(msg);
  }

  setInterval(exibirMensagem, 3000); // Executa a função a cada 1 segundo (1000 milissegundos)


//Exercicio SetTimeout
function exibirMensagem() {
    let h1 = document.createElement('h1')
    let msg = h1.innertext = "Hello World!";



    console.log(msg);
}

setTimeout(exibirMensagem, 3000); // Executa a função a cada 3 segundo (1000 milissegundos)

//Exercicio evento click no dom

const click = () => {
    let body = document.querySelector('body');
    let div = document.createElement('div')
    let button = document.createElement('button')
    let h1 = document.createElement('h1')

    div.appendChild(button)
    div.appendChild(h1)
    body.appendChild(div)

    button.style.height = '30px'
    button.style.width = '200px'
    button.innerText = 'CLICK HERE'

    button.addEventListener('click', () => {
        h1.innerText ='Hello World!'

    }

    )

    return body
}
click()

