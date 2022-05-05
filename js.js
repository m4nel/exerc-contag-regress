function contagem() {
  let numero1 = parseInt(document.getElementById("num1").value);
  let numero2 = parseInt(document.getElementById("num2").value);
  let tela = document.getElementById("tela");

  if (numero1 > numero2) {
    for (let i = numero1; i >= numero2; i--) {
      
     tela.innerHTML += `${i} `;
  
    }
  }

  if (numero1 < numero2) {
    

    for (let i = numero1; i <= numero2; i++) {
      tela.innerHTML += `${i} `;
    }
  }
}
