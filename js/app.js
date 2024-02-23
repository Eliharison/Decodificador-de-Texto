const textarea = document.querySelector(".textarea textarea");
const placeholder = document.querySelector(".placeholder");

function criptografar() {
  const valor = document.querySelector("#textoPrincipal").value;

  if (valor) {
    remover__filhos("resultado");
    adicionar__estilo("mensagem__inexistente", "none");
    const caracter__separado = valor.split("");
    let texto__criptografado = "";
    caracter__separado.forEach((elemento) => {
      switch (elemento) {
        case "e":
          elemento = "enter";
          break;
        case "i":
          elemento = "imes";
          break;
        case "a":
          elemento = "ai";
          break;
        case "o":
          elemento = "ober";
          break;
        case "u":
          elemento = "ufat";
          break;
      }
      texto__criptografado += elemento;
    });

    adicionar__html("p", "resultado", texto__criptografado, "texto");
    adicionar__estilo("resultado", "flex");
    botao_copiar();
  } else {
    remover__filhos("resultado");
    adicionar__estilo("mensagem__inexistente", "block");
  }
}

function botao_copiar() {
  adicionar__html("a", "resultado", "Copiar", "copiar");
  click = document.getElementById("copiar");
  click.setAttribute("onclick", "copiar()");
}

function copiar() {
  const elemento = document.getElementById("texto");
  const conteudo = elemento.textContent || elemento.innerText;
  navigator.clipboard.writeText(conteudo);
}

function adicionar__html(tagFilha, id, conteudo, criarId) {
  let filho = document.createElement(tagFilha);
  let pai = document.getElementById(id);
  filho.textContent = conteudo;

  pai.appendChild(filho);
  filho.setAttribute("id", criarId);
}

function adicionar__estilo(id, propriedade) {
  let div = document.getElementById(id);
  div.style.display = propriedade;
}

function remover__filhos(id) {
  let section = document.getElementById(id);
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }
}

textarea.addEventListener("input", function () {
  placeholder.style.display = this.value ? "none" : "block";
});


