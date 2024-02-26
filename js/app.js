const textarea = document.querySelector(".textarea textarea");
const placeholder = document.querySelector(".placeholder");
textarea.addEventListener("input", function () {
  placeholder.style.display = this.value ? "none" : "block";
});

function criptografar() {
  const valor = document.querySelector("#textoPrincipal").value;

  if (valor && verificar__texto(valor)) {
    verificar__texto(valor);
    console.log(verificar__texto(valor));
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
    botao__copiar();
  } else {
    console.log(verificar__texto(valor));
    adicionar__estilo("resultado", "none");
    adicionar__estilo("mensagem__inexistente", "block");
  }
}

function descriptografar() {
  const valor = document.querySelector("#textoPrincipal").value;

  if (valor && verificar__texto(valor)) {
    remover__filhos("resultado");
    adicionar__estilo("mensagem__inexistente", "none");

    let resultado = valor
      .replace(/enter/g, "e")
      .replace(/ai/g, "a")
      .replace(/imes/g, "i")
      .replace(/ufat/g, "u")
      .replace(/ober/g, "o");

    adicionar__html("p", "resultado", resultado, "texto");
    adicionar__estilo("resultado", "flex");
    botao__copiar();
  } else {
    adicionar__estilo("resultado", "none");
    adicionar__estilo("mensagem__inexistente", "block");
  }
}


