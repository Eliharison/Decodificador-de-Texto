function verificar__texto(texto) {
    if (!texto.match(/^[a-z\s]+$/)) {
      exibir__popup();
      return false;
    } else {
      return true;
    }
  }
  
  function exibir__popup() {
    adicionar__estilo("popup", "flex")
    adicionar__estilo("overlay", "block")
  }
  
  function fechar__popup() {
    adicionar__estilo("popup", "none")
    adicionar__estilo("overlay", "none")
  }
  
  function botao__copiar() {
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