<h1 align="center">FECAP - Fundação de Comércio Álvares Penteado</h1>

<p align="center">
<a href= "https://www.fecap.br/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZPrRa89Kma0ZZogxm0pi-tCn_TLKeHGVxywp-LXAFGR3B1DPouAJYHgKZGV0XTEf4AE&usqp=CAU" alt="FECAP - Fundação de Comércio Álvares Penteado" border="0"></a>
</p>

# Projeto Educa Social 

## Integrantes:
<a href="https://www.linkedin.com/in/mateusmonteiroaugusto/">Mateus Monteiro Augusto</a>, <br>
<a href="https://br.linkedin.com/in/mateusspiccinin">Mateus Souza Piccinin</a>, <br>
<a href="https://github.com/2023-2-NADS2/Projeto9">Pedro Henrique Regueiro</a>, <br>
<a href="https://github.com/2023-2-NADS2/Projeto9">Thiago Santana Dias</a>, <br>
<a href="https://www.linkedin.com/in/wilsontestonijunior/">Wilson Testoni</a>,<br>
<a href="https://github.com/2023-2-NADS2/Projeto9">Victor Barcelos de Araújo</a>

## Professores Orientadores: 
<a href="https://www.linkedin.com/in/adriano-valente-534576135/">Me. Adriano Felix Valente</a>, <br>
<a href="https://www.linkedin.com/in/jos%C3%A9-carlos-buesso-jr-15462234/">Me. Prof. José Carlos Buesso Jr</a>, <br>
<a href="https://www.linkedin.com/in/francisco-escobar/">Me. Francisco de Souza Escobar</a>



<p align="center">
<img src="https://github.com/2023-2-NADS2/Projeto9/blob/main/Imagens/logo.png" border="0" width="300"> <br>
  Projeto Interdisciplinar Sistema Empresarial WEB  <a href="/">
</p>

## Descrição: <br>
<p>Projeto web desenvolvido no 2º semestre do curso de Análise e Desenvolvimento de Sistemas (ADS), com o objetivo de apresentar e disponibilizar cursos de forma gratuita para os alunos. Os cursos em questão foram disponibilizados pela EducaNexus.</p>
<p>O projeto abrange não apenas as páginas principais, como home, cadastro e login, mas também inclui uma página dedicada a cada categoria de curso. Além disso, integra um sistema de login com dois perfis de usuários: administrador e usuário comum. O administrador desfruta de privilégios que possibilitam a criação, remoção e atualização de informações relacionadas aos cursos na plataforma. Por outro lado, o usuário comum tem acesso a um guia detalhado, passo a passo, que orienta sobre como se inscrever nos cursos gratuitos.</p>


## Objetivo: <br>
- Facilitar o acesso à educação de qualidade


## 💻 Tecnologias: <br>
### Front-end
- **HTML**: Estrutura semântica do site.
- **CSS**: Estilos para a apresentação do site, com várias concatenações de diversas folhas de estilo para melhor organização e manutenção do código.
- **JavaScript**: Utilizado para tornar as páginas web interativas e dinâmicas, permitindo a manipulação do conteúdo e a interação com o usuário
- **React**:  Biblioteca JavaScript para construção de interfaces de usuário, permitindo a criação de componentes reutilizáveis e atualização eficiente da interface em resposta a mudanças de estado.

### Back-end 
- **Node.js**: Ambiente de execução JavaScript, utilizado para construir aplicações escaláveis e de alta performance.
- **MySQL**: Sistema de gerenciamento de banco de dados para armazenamento de dados do site.

### UX/UI Design
- <a href="https://www.figma.com/file/M33fxI2bjVKQenw25Oj4E4/Wireframe-P03?type=design&node-id=0-1&mode=design"> Wireframe</a><br>
- <a href="https://www.figma.com/file/rRDqPpipYdsBG4X91Bhqaa/Layout-E03?type=design&node-id=0-1&mode=design"> Desenvolvimento de layout</a><br>
<br>

## 💻 Bibliotecas: <br> 
- **React**:
   <p>React-router: Usado para criar rotas no front-end</p>
   <p>Styled-components: Usado para estilização no react</p>
   <p>Axios: Utilizado para fazer requisições ao back-end</p>

- **Node.js**:
  <p>Sequelize: Utilizado para criar os modelos das tabelas no BD e para manipulação de dados</p>
  <p>Bcrypt: Usado para encriptar as senhas dos usuários.</p>
  <p>Multer: Utilizado para lidar com os updates das imagens dos cursos</p>
  <p>jsonwebtoken: Utilizado para gerar token de autenticação no momento do login</p>

## 🛠 Estrutura de pastas
- `Documentos`
    - `Design de Interface Digital`
    - `Modelagem de Software e Arquitetura de Sistemas`
- `imagens`
    - `logo.png`
- `src`
    - `backend`
        - `public`
        - `src`
            - `config`
               - `database`
            - `controllers`
            - `images`
            - `models`
            - `routes`
            - `services`
  - `frontend`
      - `public`
      - `src`
         - `components`
         - `images`
         - `pages`
         - `routes`
         - `styles`
- `README.md`       

## Pré-requisitos
- Node.js 
- NPM 
- MySQL

## Instalação

1. Clone o repositório do projeto:
   ```sh
   git clone https://github.com/2023-2-NADS2/Projeto9
   ```
2. Navegue até a pasta do projeto e instale as dependências:
   ```sh
   cd frontend
   npm install
  
   cd backend
   npm install
   ```
3. Crie um BD no MySQL com o nome pi (*Caso queira mudar o nome do banco, será preciso alterar as configurações do sequelize no código*):
   ```sh
   CREATE DATABASE pi;
   USE pi;
   ```
4. Depois de ter criado o banco, crie as tabelas e coloque os dados. Você pode fazer esse passo de duas maneiras
   
4-1. Importar as tabelas junto com dados para o mySQL usando o damp que está disponível na pasta (backend/src/config
/database/);  

4-2. A segunda maneira seria usar o sequilize para criar as tabelas e também inserir os dados:
    ```sh    
    // Passo 1 - Criar as tabelas executando o arquivo createTable.js pelo terminal
    node createTable
    
    // Passo 2 - Inserir os dados executando o arquivo seed.js pelo terminal
    node seed
   ```

6. Agora, abra um terminal na dentro da pasta frontend e outro na pasta backend, e rode o comando:
   ```sh
   // terminal na pasta frontend
   npm start
   // terminal na pasta do backend
   npm run dev
   ```
7. Por fim, abra o navegador e acesse `http://localhost:3001/home` para visualizar a home do site.

  
## 🎓 Referências
1. <https://github.com/>
2. <https://fonts.google.com/>
3. <https://https://figma.com/>
4. <https://getbootstrap.com/>
5. <https://react.dev/>
