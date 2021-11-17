
function clicar() {
    var submenu = document.getElementById('submenu')
    if (submenu.style.display === 'none') {
        submenu.style.display = 'block'
    } else {
        submenu.style.display = 'none'
    }
}

function selecionarLivro(x) {
    localStorage.setItem('idLivro', x)
}
