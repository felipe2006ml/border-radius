function changeBorderTl(valor) {
    const conteudo = document.getElementById('content')

    conteudo.style.borderTopLeftRadius = `${valor}px`
}

function changeBorderTr(valor) {
    const conteudo = document.getElementById('content')

    conteudo.style.borderTopRightRadius = `${valor}px`
}

function changeBorderBr(valor) {
    const conteudo = document.getElementById('content')

    conteudo.style.borderBottomRightRadius = `${valor}px`
}

function changeBorderBl(valor) {
    const conteudo = document.getElementById('content')

    conteudo.style.borderBottomLeftRadius = `${valor}px`
}