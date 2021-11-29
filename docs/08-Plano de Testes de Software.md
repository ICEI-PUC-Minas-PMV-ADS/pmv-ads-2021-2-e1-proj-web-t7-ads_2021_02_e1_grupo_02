# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
- Site publicado na Internet
- Navegador da Internet - Chrome, Firefox ou Edge
- Conectividade de Internet para acesso às plataformas (APISs)

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

|Caso de Teste | CT-01 - Cadastrar usuário                 |
|--|-------------------------------------------------------|
|Requisitos Associados |RF-01 - O site deve permitir ao usuário se cadastrar e mantê-lo no banco de dados <br> RF-07 - O usuário deve poder informar ao menos um meio de contato|
|Objetivo de Teste| Verificar se os dados do usuário estão sendo registrados corretamente |
|Passos| 1) Acessar o Navegador <br> 2) Informar o endereço do site <br> 3) Visualizar a página de cadastro <br> 4) Fazer o cadastro no site|
|Critérios de Êxito| - Os dados do usuário devem ser guardados no localStorage <br> - O site deve redirecionar para a página de "login"|

|Caso de Teste | CT-02 - Se conectar com os dados de acesso cadastrado|
|--|-------------------------------------------------------|
|Requisitos Associados |RF-01 - O site deve permitir ao usuário se cadastrar e mantê-lo no banco de dados |
|Objetivo de Teste| Verificar se o sistema de "login" está funcionando corretamente |
|Passos| 1) Acessar o Navegador <br> 2) Informar o endereço do site <br> 3) Visualizar a página de "login" <br> 4) Inserir os dados de acesso ao site|
|Critérios de Êxito| - Os dados de aceso devem ser comparados com os guardados no localStorage <br> - O site deve redirecionar o usuário para a página de busca|

|Caso de Teste | CT-03 - Pesquisar um livro|
|--|-------------------------------------------------------|
|Requisitos Associados |RF-05 - O site deve oferecer uma funcionalidade de busca que permita ao usuário localizar livros específicos |
|Objetivo de Teste| Verificar se o sistema de busca está apresentando o livro buscado |
|Passos| 1) Acessar o Navegador <br> 2) Informar o endereço do site <br> 3) Visualizar a tela de busca <br> 4) Informa no buscador do site o nome de um livro presente no site |
|Critérios de Êxito| - O conteúdo da página deve ser filtrado e apresentar apenas o livro buscado|

|Caso de Teste | CT-04 - Visualizar as informações do livro escolhido|
|--|-------------------------------------------------------|
|Requisitos Associados |RF-02 - O site deve ter campos pré-definidos de publicação e de preenchimento obrigatório, como fotos do livro, autor, categoria, ano de publicação e sinopse <br> RF-03 - O site deve permitir visualizar todos os detalhes  da publicação do livro |
|Objetivo de Teste| Verificar se as informações do livro buscado estão sendo apresentadas |
|Passos| 1) Acessar o Navegador <br> 2) Informar o endereço do site <br> 3) Visualizar a página de "login" <br> 4) Inserir os dados de acesso ao site <br> 5) Visualizar a tela de busca <br> 6) Clicar em qualquer livro da página |
|Critérios de Êxito| - O numero do objeto do livro clicado deve ser armazenado em "idLivro" no localStorage <br> - O livro clicado deve redirecionar o usuário para "livro.html" <br> - A tela de visualização do livro deve atualizar com as informações do livro clicado|

|Caso de Teste | CT-05 - Adicionar e remover um livro dos favoritos|
|--|-------------------------------------------------------|
|Requisitos Associados |RF-04 - O site deve permitir ao usuário salvar e visualizar livros preferidos |
|Objetivo de Teste| Verificar se o sistema de favoritos está funcionando |
|Passos| 1) Acessar o Navegador <br> 2) Informar o endereço do site <br> 3) Visualizar a tela de busca <br> 4) Clicar em qualquer livro da página <br> 5) clicar no botão com coração na capa <br> 6) Acessar a tela de favoritos <br> 7) clicar no botão com coração quebrado abaixo do nome do livro |
|Critérios de Êxito| - O numero do objeto do livro "favoritado" deve ser guardado em uma lista no localStorage <br> - A lista de favoritos deve ser apresentada na tela de favoritos <br> - O numero do objeto do livro "favoritado" deve ser removido da lista no localStorage|

|Caso de Teste | CT-06 - Visualizar e editar dados do usuário|
|--|-------------------------------------------------------|
|Requisitos Associados |RF-06 - O usuário deve poder editar os dados cadastrados no site <br> RF-07 - O usuário deve poder informar ao menos um meio de contato |
|Objetivo de Teste| Verificar se o usuário consegue ver os dados que ele cadastrou e editar |
|Passos| 1) Acessar o Navegador <br> 2) Informar o endereço do site <br> 3) Visualizar a tela de dados do usuário clicando no nome que ele cadastrou aparecendo no menu do site <br> 4) Visualizar se os dados que ele cadastrou no começo aparecem na tela <br> 5) Editar os dados |
|Critérios de Êxito| - Os dados do usuário devem ser atualizados no localStorage <br> - O formulário deve apresentar os novos dados|