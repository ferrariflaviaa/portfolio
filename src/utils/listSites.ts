import eSports from "../assets/projetc/eSports.png";
import primeFlix from "../assets/projetc/primeFlix.png";
import severus from "../assets/projetc/severus.png";
import tudaochefsfood from "../assets/projetc/tudaochefsfood.png";

interface IListSites {
  id: number;
  title: string;
  img: string;
  about: string;
  link: string;
  github: string;
}
const listSites: IListSites[] = [
  {
    id: 1,
    title: "SeverusTech",
    img: severus,
    about:
      "Este website foi desenvolvido com o propósito de apresentar e divulgar minha startup, que se concentra no desenvolvimento de software. Para a criação deste projeto, utilizamos tecnologias avançadas, incluindo ReactJS e TypeScript.",
    link: "https://severustech.netlify.app/",
    github: "",
  },
  {
    id: 2,
    title: "TudaoChefsFood",
    img: tudaochefsfood,
    about:
      " lanchonete Tudaochefsfood, localizada em Muriaé. O projeto priorizou as cores e a identidade visual do estabelecimento, contando a história única da lanchonete. A página inclui o cardápio completo, informações detalhadas sobre a localização e um link direto para o WhatsApp, facilitando o contato e os pedidos dos clientes.",
    link: "https://tudaochefsfood.com.br/",
    github: "",
  },
  {
    id: 3,
    title: "Prime-Flix",
    img: primeFlix,
    about:
      "Venho apresentar a vocês esse site de filmes onde podemos ver a sinopse, nota de avaliação, trailer e favoritar filmes. Feito com a biblioteca ReactJS e utilizando a API themoviedb, para carregar os dados relacionados ao filme, além de também usar o localStorage para armazenar os filmes marcados com favorito durante o uso da aplicação.",
    link: "https://primeflix-projeto.netlify.app/",
    github: "https://github.com/ferrariflaviaa/Prime-Flix",
  },
  {
    id: 4,
    title: "eSports",
    img: eSports,
    about:
      "Aplicação web projetada para facilitar a busca de parceiros de jogo para entusiastas de videogames. Este projeto inclui uma lista de jogos pré-definida e oferece a funcionalidade de criar anúncios para encontrar novos companheiros de equipe. Além disso, desenvolvemos um banco de dados personalizado para dar suporte a esta plataforma.",
    link: "",
    github: "https://github.com/ferrariflaviaa/NLW-eSports",
  },
];

export { listSites };
export type { IListSites };
