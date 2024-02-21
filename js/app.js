const textarea = document.querySelector(".textarea textarea");
const placeholder = document.querySelector(".placeholder");

function criptografar() {
  const valor = document.querySelector("#textoPrincipal").value;

  if (valor) {
    adicionar__estilo__filhos("mensagem__inexistente", "display: none;");

    const caracter__separado = valor.split("");
    let texto__criptografado = "";
    caracter__separado.forEach((elemento) => {
      texto__criptografado += cifra__cesar(elemento, 3);
    });

    adicionar__html("p", "resultado", texto__criptografado);
  } else {
    remover__filhos("resultado")
    adicionar__estilo__filhos("mensagem__inexistente", "display: block;");
  }
}

function adicionar__html(tagFilha, id, conteudo) {
  let filho = document.createElement(tagFilha);
  let pai = document.getElementById(id);
  filho.textContent = conteudo;

  pai.appendChild(filho);
}

function adicionar__estilo__filhos(id, estilo) {
  let section = document.getElementById(id);
  if (section) {
    let filhos = section.children;
    for (let i = 0; i < filhos.length; i++) {
      filhos[i].style.cssText += estilo;
    }
  }
}

function remover__filhos(id) {
  let section = document.getElementById(id);
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }
}

function cifra__cesar(letra, deslocamento) {
  if (letra.match(/[a-zA-Z]/)) {
    let codigo__ascii = letra.charCodeAt(0);
    let limite = codigo__ascii <= 90 ? 65 : 97;
    return String.fromCharCode(
      codigo__ascii - limite + (deslocamento % 26) + limite
    );
  }
  return letra;
}

textarea.addEventListener("input", function () {
  placeholder.style.display = this.value ? "none" : "block";
});
