
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

function cadastrar(){
    var nome = document.getElementById('nome')           
    var dtNasci = document.getElementById('dtnascimento')
    var tel = document.getElementById('tel')
    var cpf = document.getElementById('cpf')
    var email = document.getElementById('email')
    var validar = document.getElementById('validacao')

   if (nome.value.length < 10) {
        nome.style.backgroundColor = '#eb9f9f'
        alert('Nome inválido!')
        nome.focus()
        return false 
   } else if (dtNasci.value < 10 || dtNasci.value.indexOf('/') == -1) {
        nome.style.backgroundColor = 'transparent'
        dtNasci.style.backgroundColor = '#eb9f9f'
        alert('Data de nascimento inválida!')
        dtNasci.focus()
        return false
   } else if (tel.value.length < 9) {
        dtNasci.style.backgroundColor = 'transparent'
        tel.style.backgroundColor = '#eb9f9f'
        alert('Numero de telefone inválido!')
        tel.focus()
        return false
   } else if (cpf.value.indexOf('.') == -1 || cpf.value.indexOf('-') == -1 ) {
        tel.style.backgroundColor = 'transparent'
        cpf.style.backgroundColor = '#eb9f9f'
        alert('Numero de CPF inválido!')
        cpf.focus()
        return false
   } else if (email.value.indexOf('@')== -1 || email.value.indexOf('.') == -1) {
        cpf.style.backgroundColor = 'transparent'
        email.style.backgroundColor = '#eb9f9f' 
        alert('Email inválido!')
        cpf.focus()
        return false
        
   }
    else{
        email.style.backgroundColor = '#ffffff'
        localStorage.nome = document.getElementById('nome').value 
        validar.style.display = 'block'
        validar.innerHTML = 'Cadastro confirmado com sucesso!!!'
        location.href = 'favoritos.html'
        
    }
}


function carregar() {
    if (localStorage.nome){
        document.getElementById('usuario').innerHTML = localStorage.nome
    }
}    