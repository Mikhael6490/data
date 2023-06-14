function very()
{
var idade = document.querySelector('input#idade')
var result = document.querySelector ('p#aprovd')
var check = Number(idade.value)
if (check < 16) {result.innerHTML = `você tem ${check} anos, então não vota!`}
else if (check < 18) {result.innerHTML = `você tem ${check} anos, então seu voto é opcional!`}
else if (check > 17 && check <= 65) { result.innerHTML = `Você tem ${check} anos, então seu voto é obrigatório!`}
else if (check > 65 && check < 100) { result.innerHTML = `você tem ${check} anos, agora seu voto é opcional!`}
else {result.innerHTML = `Tu ainda ta vivo?`}
}