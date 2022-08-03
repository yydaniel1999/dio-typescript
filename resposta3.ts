const botaoAtualizar = document.getElementById("atualizar-saldo")!;
const botaoLimpar = document.getElementById("limpar-saldo")!;
const soma = document.getElementById("soma") as HTMLInputElement;
const campoSaldo = document.getElementById("campo-saldo")!;

function somarAoSaldo(soma: number) {
  campoSaldo.innerHTML = String(+campoSaldo.innerHTML + soma);
}

function limparSaldo() {
  campoSaldo.innerHTML = "0";
}

botaoAtualizar.addEventListener("click", function () {
  somarAoSaldo(+soma.value);
});

botaoLimpar.addEventListener("click", function () {
  limparSaldo();
});

limparSaldo();

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
