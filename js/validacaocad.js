function mostrarOcultarS(){
    var senha = document.getElementById ('senha')
    if(senha.type == "password"){
        senha.type = "text";
    }else{
        senha.type="password";
    }
}
function validacao(){
    var nomecadastro  = document.getElementById('nome');
    var emailcadastro = document.getElementById('email');
    var senha = document.getElementById('senha');
    var valsenha  = document.getElementById('valsenha');

    if(nomecadastro.value.length < 7){
        nomecadastro.style.backgroundColor = '#eb9f9f'
        alert("Obrigatório informar o seu nome completo!");
        nomecadastro.focus();
        return false;
    }else if(emailcadastro.value.indexOf('@')== -1 || emailcadastro.value.indexOf('.') == -1){
        nomecadastro.style.backgroudColor = 'transparent';
        emailcadastrostyle.backgroudColor = "#ff6459";
        alert("Obrigatório informar o email!");
        emailcadastro.focus();
        return false;
    }else if(senha.value.length < 8){
        emailcadastro.style.backgroudColor = 'transparent';
        senha.style.backgroudColor = "#ff6459";
        alert("Obrigatório informar uma senha de no mínimo 8 carácteres!");
        senha.focus();
        return false;
    }else if(valsenha.value != senha.value){
        senha.style.backgroudColor = 'transparent';
        valsenha.style.backgroudColor = "#ff6459";
        alert("Obrigatório confirmar sua senha!");
        valsenha.focus();
        return false;
    }
    else{
        valsenha.style.backgroudColor = 'transparent';

        var usuarioCad = JSON.parse(localStorage.getItem('usuario_Cad') || '{}');

        usuarioCad.nome = document.getElementById('nome').value;
        usuarioCad.email = document.getElementById('email').value;
        usuarioCad.senha = document.getElementById('valsenha').value;

        localStorage.setItem("usuario_Cad", JSON.stringify(usuarioCad));
        localStorage.removeItem('email_preCad')
        location.href = 'busca.html'
    }
}

function verificarUsu(){
    var usuarioCad = JSON.parse(localStorage.getItem('usuario_Cad') || '{}');

    var usuarioemail = document.querySelector('#email').value;
    var usuariosenha = document.querySelector('#senha').value; 

    if (usuarioemail == usuarioCad.email && usuariosenha == usuarioCad.senha){
        location.href = 'busca.html';
    }else{
        alert('⚠️ Usuário não cadastrado ou senha incorreta!');
    }
}

function cadEmail(){
    localStorage.setItem("email_preCad", document.querySelector("#email-preCad").value);
}

function recEmail(){
    document.getElementById('email').value = localStorage.email_preCad  || '';
}