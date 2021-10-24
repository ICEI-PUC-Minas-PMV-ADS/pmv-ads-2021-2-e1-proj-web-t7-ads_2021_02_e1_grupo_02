# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada em um trabalho de construção feito pelos membros da equipe a partir de situações próprias vividas ou presenciadas em seu cotidiano. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

* **Thiago Guimarães** tem 32 anos, é taxista e possui o Ensino Médio completo. Pensa em se desenvolver pessoalmente e melhorar suas condições financeiras. Adora jogar futebol, videogames, beber com os amigos, sair com a esposa, mexer no celular e ler livros. Mas se frusta quando não consegue encontrar livros de seu interesse em pesquisas virtuais, com o trânsito carregado ou quando erra. Alguns dos aplicativos que ele mais interage são: Instagram, Facebook, Twitter, Spotify e Google Maps.
* **Cristina Chaves** tem 16 anos, é estudante e ainda cursa o Ensino Médio Técnico. Pensa em tirar notas boas, quer ter a própria renda e comprar coisas novas. Gosta de videogames, gravar vídeos, ler mangás, assistir animes e jogar vôlei. Mas se frusta quando os aplicativos travam, não tira notas boas, com a falta de oportunidades de trabalho e o deslocamento até a escola. Alguns dos aplicativos que ela mais interage são: Instagram, TikTok, Snapchat, Discord e Mangá Plus.
* **Ernesto Alves** tem 47 anos, possui Ensino Superior e é professor de Filosofia. Pensa em passar mais tempo com a família, quer quitar as dívidas, ter retorno financeiro e interagir mais com os alunos. Adora viajar com a família, aprender coisas novas e fazer Yoga. Mas se frusta quando não encontra material digital para as aulas, não alcança os objetivos pessoais ou sente dificuldade com novas tecnologias.

## Histórias de Usuários

A partir da compreensão do cotidiano das personas, foram registradas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO... `FUNCIONALIDADE` |PARA... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Thiago Guimarães | Espaço para comentário sobre locais onde encontrar determinados livros | Dar dicas de locais que vendam determinados exemplares de livros de difícil aquisição |
|Thiago Guimarães | Sistema de busca de dicas com filtros por categoria | Encontrar exemplares de livros espírita  em locais próximos de sua residência |
|Thiago Guimarães | Opção de favoritar livros e dicas | Ter salvo em seu perfil as publicações favoritas sobre livros científicos |
|Cristina Chaves | Sistema de busca de livros com filtros por categoria | Encontrar exemplares de gibis online |
|Cristina Chaves | Manter na base de dados exemplares dos livros | Vender o alugar os livros usados  na escola e gerar receita |
|Ernesto Alves | Sistema de comunicação entre usuários | Trocar livros filosóficos e ampliar seus estudos |
|Ernesto Alves | Manter na base de dados exemplares dos livros | Doar os livros não mais adotados na faculdade |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto, identificando também a prioridade em que os mesmos devem ser entregues.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| O site deve permitir ao usuário se cadastrar e mantê-lo no banco de dados | ALTA | 
|RF-02| O usuário, no momento do cadastro, deve informar ao menos um meio de contato de forma obrigatória | ALTA |
|RF-03| O site deve ter campos pré-definidos de publicação e de preenchimento obrigatório,  como fotos do livro, autor, categoria, local onde se encontra, ano de publicação, sinopse, estado de conservação, intenção da publicação (venda, troca, doação ou dica) | ALTA |
|RF-04| O site deve oferecer uma funcionalidade de busca por filtro que permita ao usuário localizar livros específicos | MÉDIA |
|RF-05| O site deve permitir visualizar todos os detalhes  da publicação do livro | MÉDIA |
|RF-06| O site deve permitir a interação entre usuários por meio de comentários nas publicações | MÉDIA |
|RF-07| O site deve exibir os livros mais buscados e os adicionados recentemente na página inicial | BAIXA |
|RF-08| O site deve permitir ao usuário salvar dicas e livros preferidos | BAIXA
|RF-09| O site deve permitir visualizar dicas e livros salvos como preferidos | BAIXA

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) | ALTA |
|RNF-02| Deve ser publicado em um ambiente acessível publicamente na Internet (GitHub) | ALTA |
|RNF-03| O sistema deve ser responsivo para rodar em um dispositivo móvel | MÉDIA | 
|RNF-04| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre, não podendo extrapolar a data de 06/12/2021 |
|02| O site deverá respeitar as normas da Lei Geral de Proteção de Dados Pessoais (LGPD) |
|03| Não pode ser desenvolvido um módulo de back-end |
