# Projeto PokeAPI em React

Projeto proposto pelo Curso de programador fullstack da empresa Labenu;

Este projeto tem como objetivo desafiar os conhecimentos do aluno colocando em prática todo o conteúdo aprendido durante o módulo de React Front-end;

Este projeto inicialmente foi um grande desafio para ser colocado em prática tendo em vista a imensa quantidade de aulas, atividades que foram realizadas para absorver e assimilar o conhecimento necessário para que o mesmo funcionasse de maneira adequada e conforme o proposto pelo curso com seus requesitos;

Criado em react-vite o aplicativo conta com algumas bibliotecas instaladas como: styled-components, chakra-ui, react-router-dom e axios. Todos estes utilizados conforme os pedidos para aprovação do curso.

Estruturado por pastas para separar responsabilidades e deixar de maneira organizada para melhor manutenção de entendimento dos desenvolvedores, o pokedex-react-boucault é um programa que conta com 3 componentes e 3 páginas. Todo o conteúdo distribuído para a aplicação é da PokeAPI (https://pokeapi.co/).

A proposta é fazer a integração da API com um aplicativo trabalhado em react, ou seja, uma biblioteca do facebook que fornece renderização de páginas em tempo real. Trabalhando com uma engine moderna capaz de suportar alterações de estados fazendo com que o site seja dinamico e interativo.

A primeira parte do projeto foi fazer a requisição da API com a biblioteca axios na pasta /API no arquivo /request.js. Como o próprio nome já diz, o arquivo faz a requisição com o método get() que percorre as propriedades dos dados solicitados e então altera um estado de array vazio com as informações da API.

Com os dados prontos, as páginas e componentes da aplicação pode trabalhar com as informações referentes a cada um. O Header é responsável pelo cabeçalho, interatividade de botões com renderizações condicionais que permitem ao usuário navegar pelas páginas ou até mesmo "capturar" pokémons ou "libertá-los".

O Modal é um componente feito com a biblioteca do chakra-ui que permite fazer um alerta estilizado ao interagir com alguns botões da aplicação.

PokemonCard é a estrutura principal onde um cartão com as informações dos pokémons são renderizadas permitindo ao usuário a visualização de imagens e textos.

As informações requisitadas da API são passadas para os componentes através de props ou globalState, componentes pai que podem passar informações para filhos está sendo utilizado props e para informações que serão consumidas em mais de um componente é feito o uso do globalState.

Com os dados fluindo pelo aplicativo seja por props ou globalState o react-router-dom é configurado com uso de alguns hooks como useLocation, useParams, BrowserRouter, Routes, Route, useNavigate para que as URLs tenha identificador próprio e permita o usuário ter uma url correta para cada pokémon em sua página correspondente.

Os botões no aplicativo são feitos para criar alterações de estado, permitindo assim que pokémons "passem" de uma página para outra, como se fosse um carrinho de compras. Mas na verdade isso não passa de cópias, filtros e renderizações, que através do uso da lógica correta consigo trazer esta sensação de "tirei daqui e coloquei ali".

A parte mais difícil confesso que foi toda a estilização do site, onde mesmo com um figma já preparado foi um quebra-cabeças realizar toda a montagem da estrutura das informações em cards, containers e etc. Uso do switch case para renderização de backgrounds e imagens sendo passagens por props para styled-components foi algo surreal, complexo porém muito bonita a função depois de pronta hehe.

Este projeto me mostrou que o conhecimento e sua assimilação leva tempo, e mesmo assim ainda tenho muito a aprender. Continuarei praticando para aperfeiçoar cada vez mais minhas habilidades e capacidades.

Aproveitem o programa e compartilhem se possível! :D