const botao = document.querySelector(".transacao__button");

botao.addEventListener('click', function(event){
    event.preventDefault();


const inputNome = document.getElementById ("transacaoInputName");
const inputValor = document.getElementById ("transacaoInputMoney");
const inputData = document.getElementById ("transacaoInputDate");

const table = document.querySelector(".extrato__table");
const linha = document.createElement('tr');

const colunaNome = document.createElement("td");
const mensagemN = document.createTextNode(inputNome.value);
colunaNome.appendChild(mensagemN);

const colunaValor = document.createElement("td");
const mensagemV = document.createTextNode(inputValor.value);
colunaValor.appendChild(mensagemV);

const colunaData = document.createElement("td");
const mensagemD = document.createTextNode(inputData.value);
colunaData.appendChild(mensagemD);

linha.appendChild(colunaNome);
linha.appendChild(colunaValor);
linha.appendChild(colunaData);

table.appendChild(linha);
});