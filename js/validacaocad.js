function mostrarOcultarS(){
    var senha = document.getElementById ('senha')
    if(senha.type == "password"){
        senha.type = "text";
    }else{
        senha.type="password";
    }
}
function validacao(){
    var nome  = document.getElementById('nome');
    var email = document.getElementById('email');
    var senha = document.getElementById('senha');
    var valsenha  = document.getElementById('valsenha');

    if(nome.value.length < 7){
        nome.style.backgroundColor = '#eb9f9f'
        alert("Obrigatório informar o seu nome completo!");
        nome.focus();
        return false;
    }else if(email.value.length <7){
        nome.style.backgroudColor = 'transparent';
        email.style.backgroudColor = "#ff6459";
        alert("Obrigatório informar o email!");
        email.focus();
        return false;
    }else if(senha.value.length <8){
        email.style.backgroudColor = 'transparent';
        senha.style.backgroudColor = "#ff6459";
        alert("Obrigatório informar uma senha!");
        senha.focus();
        return false;
    }else if(valsenhavalue.length <8){
        senha.style.backgroudColor = 'transparent';
        valsenha.style.backgroudColor = "#ff6459";
        alert("Obrigatório confirmar sua senha!");
        valsenha.focus();
        return false;
    }
}
