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
    }else if(emailcadastro.value.indexOf('@')== -1 || email.value.indexOf('.') == -1){
        nomecadastro.style.backgroudColor = 'transparent';
        emailcadastrostyle.backgroudColor = "#ff6459";
        alert("Obrigatório informar o email!");
        emailcadastro.focus();
        return false;
    }else if(senha.value.length < 8){
        emailcadastro.style.backgroudColor = 'transparent';
        senha.style.backgroudColor = "#ff6459";
        alert("Obrigatório informar uma senha!");
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
        localStorage.nomecadastro = document.getElementById('nome').value
        localStorage.emailcadastro = document.getElementById('email').value
        location.href = 'busca.html'
    }
}
