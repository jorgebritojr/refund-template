// Aceitando somente números no valor 2
// Seleciona os elementos do formulário
const amount = document.getElementById("amount")

amount.oninput = () => {
  let value  = amount.value.replace(/\D/g, "") // Remove qualquer letrar que é digitada no input 
  console.log(value) // para teste no console

}