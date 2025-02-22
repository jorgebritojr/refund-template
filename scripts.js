// Aceitando somente números no valor 3
// Seleciona os elementos do formulário
const amount = document.getElementById("amount")

amount.oninput = () => {
  let value  = amount.value.replace(/\D/g, "") // Removendo as letras
  amount.value = value // Colocando no input somente os números

}