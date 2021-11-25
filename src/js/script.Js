
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
        localStorage.nome = document.getElementById('nome').value 
        validar.style.display = 'block'
        validar.innerHTML = 'Cadastro confirmado com sucesso!!!'
        location.href = 'favoritos.html'
        
    }
}

var livros = [
    {
        isbn: '857657313X',
        capa: 'https://images-na.ssl-images-amazon.com/images/I/41MRn6hy8-L._SX346_BO1,204,203,200_.jpg',
        titulo: 'Duna: livro 1',
        autor: 'Frank Herbert',
        idioma: 'Português',
        ano: '2017',
        categoria: 'Ficção científica',
        sinopse: 'Uma estonteante mistura de aventura e misticismo, ecologia e política, este romance ganhador dos prêmios Hugo e Nebula deu início a uma das mais épicas histórias de toda a ficção científica. Duna é um triunfo da imaginação, que influenciará a literatura para sempre.Esta edição inédita, com introdução de Neil Gaiman, apresenta ao leitor o universo fantástico criado por Herbert e que será adaptado ao cinema por Denis Villeneuve, diretor de A chegada e de Blade Runner 2049. (Amazon)'
    },
    {
        isbn: '8543024978',
        capa: 'https://images-na.ssl-images-amazon.com/images/I/513h09R6yTL._SX369_BO1,204,203,200_.jpg',
        titulo: 'Engenharia de Software',
        autor: 'Ian Sommerville',
        idioma: 'Português',
        ano: '2019',
        categoria: 'Informática',
        sinopse: '"A 10ª edição de Engenharia de software foi extensivamente atualizada para refletir a adoção crescente de métodos ágeis na engenharia de software. Um dos destaques da nova edição é o acréscimo de conteúdo sobre a metodologia do Scrum. A divisão em quatro partes do livro foi significativamente reformulada para acomodar novos capítulos sobre engenharia de resiliência, engenharia de sistemas e sistemas de sistemas. Além disso, capítulos sobre tópicos como confiança, segurança e proteção foram completamente reorganizados. Todas essas mudanças se justificam por compreenderem questões essenciais para a engenharia de software moderna ― gerenciamento da complexidade, integração da agilidade a outros métodos e garantia de que os sistemas sejam seguros e resilientes. Obra de referência para estudantes de ciência da computação, engenharia da computação e sistemas de informação, e para qualquer profissional que deseje atualizar seus conhecimentos sobre reúso de software, arquitetura de projetos, confiabilidade e segurança e engenharia de sistemas.." (Amazon)'
    },
    {
        isbn: '38535908285',
        capa: 'https://images-na.ssl-images-amazon.com/images/I/51xKvH19nrL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
        titulo: 'O segredo do licorne',
        autor: 'Hergé',
        idioma: 'Português',
        ano: '2006',
        categoria: 'Mistério',
        sinopse: 'Tintim compra para o amigo Haddock o modelo de um galeão antigo, que, por coincidência, era a réplica do navio de um antepassado do capitão, o cavaleiro de Hadoque. O modelo é roubado, e logo depois a casa de Tintim é toda revirada. O que os assaltantes procuravam? Por sua vez, o capitão acha no sótão de casa as memórias do cavaleiro. Nelas, ele narra seu encontro no Caribe com o pirata Rackham, o Terrível, que o captura com seu navio, para o qual transfere os tesouros que havia pilhado. O cavaleiro consegue escapar e afunda o Licorne com todo o tesouro a bordo. Hadoque divide o mapa com a localização do naufrágio em três partes, que esconde em réplicas do navio. Muitos anos depois, Tintim e seus amigos decidem buscar as partes do mapa, sabendo que para isso terão de driblar uma perigosa quadrilha. (Amazon)'
    },
    {
        isbn: '6559609359',
        capa: 'https://images-na.ssl-images-amazon.com/images/I/61jzhKsA2dL.jpg',
        titulo: 'One Piece - 99',
        autor: 'Eiichiro Oda',
        idioma: 'Português',
        ano: '2021',
        categoria: 'Mangás',
        sinopse: 'Depois de seus companheiros conseguirem impedir a perseguição implacável dos Oficiais dos Piratas Bestiais, Luffy finalmente chega ao topo da fortaleza e está diante de Kaido!! Todos os atores reúnem-se neste palco grandioso onde um combate mais do que intenso está prestes a começar...! É o início do clímax da batalha final em Onigashima!!'
    },
    {
        isbn: '8595084742',
        capa: 'https://m.media-amazon.com/images/P/B07S5FDTVK.01._SCLZZZZZZZ_SX500_.jpg',
        titulo: 'O Hobbit',
        autor: 'J.R.R. Tolkien',
        idioma: 'Português',
        ano: '2019',
        categoria: 'Fantasia',
        sinopse: 'Bilbo Bolseiro era um dos mais respeitáveis hobbits de todo o Condado até que, um dia, o mago Gandalf bate à sua porta. A partir de então, toda sua vida pacata e campestre soprando anéis de fumaça com seu belo cachimbo começa a mudar.'
    },
    {
        isbn: '6559210839',
        capa: 'https://m.media-amazon.com/images/P/B0974T9KX5.01._SCLZZZZZZZ_SX500_.jpg',
        titulo: 'Política é para todos',
        autor: 'Gabriela Prioli',
        idioma: 'Português',
        ano: '2021',
        categoria: 'Política',
        sinopse: 'O que é uma democracia e para que serve uma constituição? Quais são as atribuições de cada uma das três esferas de poder e como garantir que elas se mantenham em harmonia? Como funcionam as eleições e qual a importância das fake news nesse cenário?'
    },
    {
        isbn: '6599034306',
        capa: 'https://images-na.ssl-images-amazon.com/images/I/5188Wi6M4RL._SX324_BO1,204,203,200_.jpg',
        titulo: 'Hellboy omnibus - volume 03: Caçada selvagem',
        autor: 'Mike Mignola',
        idioma: 'Português',
        ano: '2021',
        categoria: 'Quadrinhos',
        sinopse: 'Em 2010, Mike Mignola convidou o lendário artista Richard Corben (Makoma, O Vigarista, A Noiva do Demônio) para ilustrar a edição especial que ambos consideraram o mais divertido trabalho de sua celebrada parceria: Hellboy no México. No final dessa aventura, Hellboy alegava não se recordar do que teria se passado ao longo de cinco meses em que havia perambulado pelo México, principalmente porque esteve constantemente embriagado.'
    },
    {
        isbn: '8555340357',
        capa: 'https://m.media-amazon.com/images/P/B06XWS4W4S.01._SCLZZZZZZZ_SX500_.jpg',
        titulo: 'O ceifador: 1',
        autor: 'Neal Shusterman',
        idioma: 'Português',
        ano: '2017',
        categoria: 'Drama',
        sinopse: 'A humanidade venceu todas as barreiras: fome, doenças, guerras, miséria… Até mesmo a morte. Agora os ceifadores são os únicos que podem pôr fim a uma vida, impedindo que o crescimento populacional vá além do limite e a Terra deixe de comportar a população por toda a eternidade. Citra e Rowan são adolescentes escolhidos como aprendizes de ceifador - um papel que nenhum dos dois quer desempenhar. Para receberem o anel e o manto da Ceifa, os adolescentes precisam dominar a "arte" da coleta, ou seja, precisam aprender a matar. Porém, se falharem em sua missão - ou se a cumplicidade no treinamento se tornar algo mais -, podem colocar a própria vida em risco.'
    },
]
var exibirLivro = '';
for (i=0; i<livros.length; i++) {
    exibirLivro += `<div class="itemLivro" nome="${livros[i].titulo}" onclick="selecionarLivro(${i})">
                        <a href="livro.html">
                            <img src="${livros[i].capa}">
                            <br>
                            <p>${livros[i].titulo}</p>
                            <br>
                        </a>
                    </div>`
    ;
}

function capturar() {
        
        localStorage.setItem('exibirLivro1',JSON.stringify(exibirLivro))
        var favoritos = JSON.parse(localStorage.getItem('exibirLivro1'))
}

function carregar() {
    if (localStorage.nome){
        document.getElementById('usuario').innerHTML = localStorage.nome
    }
    var favoritos = JSON.parse(localStorage.getItem('exibirLivro1'))
    document.getElementById('livrosfavoritos').innerHTML = favoritos

}  
function editar() {
    location.href ='meus_dados.html'   
}  