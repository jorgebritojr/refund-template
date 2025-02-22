// Seleciona os elementos do formulário
const amount = document.getElementById("amount")

amount.oninput = () => {
  let value  = amount.value // Amostrar tudo que é colocado no input
  console.log(value) // console.log para teste
}