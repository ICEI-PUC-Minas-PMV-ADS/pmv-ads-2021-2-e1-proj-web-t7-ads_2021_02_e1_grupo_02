
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
   } else if (isNaN(tel.value) || tel.value.length < 9) {
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
        var usuarioCad = JSON.parse(localStorage.getItem('usuario_Cad'));

        usuarioCad.nome = document.getElementById('nome').value;
        usuarioCad.dtnascimento = document.getElementById('dtnascimento').value;
        usuarioCad.tel = document.getElementById('tel').value;
        usuarioCad.cpf = document.getElementById('cpf').value;
        usuarioCad.email = document.getElementById('email').value;

        localStorage.setItem("usuario_Cad", JSON.stringify(usuarioCad));
        validar.style.display = 'block'
        validar.innerHTML = 'Cadastro confirmado com sucesso!!!'
        location.href = 'favoritos.html'
        
    }
}
function exibir() {
    if (localStorage.usuario_Cad){
        var ExibirUsuario = JSON.parse(localStorage.getItem('usuario_Cad'));
        document.getElementById('nome').value = ExibirUsuario.nome;
        document.getElementById('dtnascimento').value = ExibirUsuario.dtnascimento  || '';
        document.getElementById('tel').value = ExibirUsuario.tel  || '';
        document.getElementById('cpf').value = ExibirUsuario.cpf  || '';
        document.getElementById('email').value = ExibirUsuario.email;
    }
}


function carregar() {  
    if (localStorage.usuario_Cad){
        var ExibirUsuario = JSON.parse(localStorage.getItem('usuario_Cad'));
        document.getElementById('saudar').innerHTML = ExibirUsuario.nome;
        document.getElementById('usuario').innerHTML = ExibirUsuario.nome;
    }
}  

function editar() {
    location.href ='meus_dados.html'   
}  

function favorito(y){
    var id = y;
    // Pega a lista já cadastrada, se não houver vira um array vazio
    var lista_favoritos = JSON.parse(localStorage.getItem('lista-favoritos') || '[]');
    // Verifica se o id do livro já está no array
    if (lista_favoritos.includes(id)) {
        alert('❤️ Este livro já está em seus favoritos!');
    } else {
        lista_favoritos.push(id);
    }
    // Converte novamente o array em string e atualiza o localStorage
    localStorage.setItem("lista-favoritos", JSON.stringify(lista_favoritos));
}

function remFavorito(y){
    var id = y;
    // Pega a lista já cadastrada
    var lista_favoritos = JSON.parse(localStorage.getItem('lista-favoritos'));
    // .idexOf localiza o "id" (o livro) dentro do array e .splice remove ele dos favoritos
    lista_favoritos.splice(lista_favoritos.indexOf(id), 1);
    alert('💔 O livro foi removido de seus favoritos!');
    // Converte novamente o array em string e atualiza o localStorage
    localStorage.setItem("lista-favoritos", JSON.stringify(lista_favoritos));
    location.reload();
}

