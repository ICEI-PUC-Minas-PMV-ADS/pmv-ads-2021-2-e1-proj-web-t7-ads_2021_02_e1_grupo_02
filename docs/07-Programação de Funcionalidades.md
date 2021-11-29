# Programação de Funcionalidades

Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema. O respectivo endereço (URL) e outras orientações de acesso são são apresentadas na sequência.

## Home-page

A tela de home-page, é a tela inicial do website. Com base na estrutura padrão, o bloco de conteúdo apresenta a proposta e o conteúdo encontrado.
- Componente de *Criar conta*, no qual o usuário é levado à tela de cadastro de conta;
- Componente de *Entrar* que direciona o usuário ao "login".

<div style="text-align: center">
    <img src="img/site/Home%20Page.png" alt="Tela Inicial" width="900"/>
</div>

**Artefatos da funcionalidade**
* homepage.html
* stylehome.css
* fundo.jpeg

**Instruções de acesso**
1. Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
2. Descompacte o arquivo em uma pasta específica;
3. Abra o Visual Studio Code e execute o Live Server;
4. Abra  um  navegador  de  Internet  e  informe  a  seguinte  URL: http://localhost:5500/index.html

## Tela de Cadastro (RF-01 e RF-07)

A tela de cadastro apresenta, no bloco de conteúdo, campos de preenchimento referentes a dados pessoais do usuário. O bloco do cabeçalho campo de busca, acesso à conta pessoal e aos favoritos.

<div style="text-align: center">
    <img src="img/site/Tela%20de%20Cadastro.png" alt="Tela de Cadastro Inicial" width="900"/>
</div>

**Requisitos atendidos**
* RF-01
* RF-07

**Artefatos da funcionalidade**
* cadastro.html
* stylecadastro.css
* fundo.jpeg
* validacao.js

**Instruções de acesso**
1. Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
2. Descompacte o arquivo em uma pasta específica;
3. Abra o Visual Studio Code e execute o Live Server;
4. Abra  um  navegador  de  Internet  e  informe  a  seguinte  URL: http://localhost:5500/cadastro.html
   
## Tela de "Login" (RF-01)

A tela de "login" permite que o usuário cadastrado entre na plataforma e apresenta, no bloco de conteúdo, campos de preenchimento referentes a dados de acesso do usuário.

<div style="text-align: center">
    <img src="img/site/Tela%20de%20Login.png" alt="Tela de Login" width="900"/>
</div>

**Requisitos atendidos**
* RF-01

**Artefatos da funcionalidade**
* login.html
* stylecadastro.css
* fundo.jpeg
* validacaocad.js

**Instruções de acesso**
1. Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
2. Descompacte o arquivo em uma pasta específica;
3. Abra o Visual Studio Code e execute o Live Server;
4. Abra  um  navegador  de  Internet  e  informe  a  seguinte  URL: http://localhost:5500/login.html

## Tela de Busca (RF-05)

Assim que o usuário informa o nome de um livro para pesquisa, a tela de busca filtra o conteúdo e mostra o livro pesquisado, no qual ele pode clicar e ser direcionado para as informações do livro, conforme a figura a seguir.

<div style="text-align: center">
    <img src="img/site/Tela%20de%20Busca.png" alt="Tela de Busca" width="900"/>
</div>

**Requisitos atendidos**
* RF-05

**Artefatos da funcionalidade**
* busca.html
* style.css
* db.js
* script.js

**Instruções de acesso**
1. Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
2. Descompacte o arquivo em uma pasta específica;
3. Abra o Visual Studio Code e execute o Live Server;
4. Abra  um  navegador  de  Internet  e  informe  a  seguinte  URL: http://localhost:5500/busca.html

## Tela de Visualização do Livro (RF-02, RF-03 e RF-04)

Ao selecionar uma das opções de publicação resultantes da pesquisa, é possível visualizar detalhes do livro, como autor, sinopse, ISBN, idioma etc. Este resultado é apresentado na figura a seguir.

<div style="text-align: center">
    <img src="img/site/Tela%20de%20Visualização%20do%20Livro.png" alt="Tela de Visualização do Livro" width="900"/>
</div>

**Requisitos atendidos**
* RF-02
* RF-03
* RF-04

**Artefatos da funcionalidade**
* livro.html
* style.css
* db.js
* script.js

**Instruções de acesso**
1. Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
2. Descompacte o arquivo em uma pasta específica;
3. Abra o Visual Studio Code e execute o Live Server;
4. Abra  um  navegador  de  Internet  e  informe  a  seguinte  URL: http://localhost:5500/livro.html

## Tela de Visualização de Favoritos (RF-04)

A tela retratada na figura abaixo permite ao usuário visualizar todas as publicações favoritadas por ele. Pode ser acessada em todas as telas de navegação, através do ícone de coração localizado no canto superior direito das telas.

<div style="text-align: center">
    <img src="img/site/Tela%20de%20Favoritos.png" alt="Tela de Visualização de Favoritos" width="900"/>
</div>

**Requisitos atendidos**
* RF-04

**Artefatos da funcionalidade**
* favoritos.html
* style.css
* db.js
* script.js

**Instruções de acesso**
1. Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
2. Descompacte o arquivo em uma pasta específica;
3. Abra o Visual Studio Code e execute o Live Server;
4. Abra  um  navegador  de  Internet  e  informe  a  seguinte  URL: http://localhost:5500/favoritos.html

## Tela de Perfil Pessoal (RF-06 e RF-07)

A tela apresenta os dados pessoais de cadastro do usuário e pode ser acessada em todas as telas de navegação, através do ícone arredondado de boneco em pictograma, localizado no canto superior direito das telas.

<div style="text-align: center">
    <img src="img/site/Tela%20de%20Perfil%20Pessoal.png" alt="Tela de Perfil Pessoal" width="900"/>
</div>

**Requisitos atendidos**
* RF-06
* RF-07

**Artefatos da funcionalidade**
* meus_dados.html
* style.css
* script.js

**Instruções de acesso**
1. Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
2. Descompacte o arquivo em uma pasta específica;
3. Abra o Visual Studio Code e execute o Live Server;
4. Abra  um  navegador  de  Internet  e  informe  a  seguinte  URL: http://localhost:5500/meus_dados.html