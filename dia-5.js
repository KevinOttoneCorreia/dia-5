// Switch case // 

let numer1 = parseInt(prompt("Escolha o primeiro numero"))
let numer2 = parseInt(prompt("Escolha o segundo numero"))
let opcao = parseInt(prompt ("Escolha a operação que deseja realizar:" + "\n1 = +; \n2 = /; \n3 =*; \n4 = -"))

switch (opcao){
    case 1:
        console.log(numer1 + "+" + numer2 + "=" + (numer1 + numer2) );
        break
    case 2:
        console.log(numer1 + "/" + numer2 + "=" + (numer1 / numer2) );
        break
    case 3:
        console.log(numer1 + "x" + numer2 + "=" + (numer1 * numer2) );
         break
    case 4:
        console.log(numer1 + "-" + numer2 + "=" + (numer1 - numer2) );
          break
    default:
        console.log("deu errado")
        break

}