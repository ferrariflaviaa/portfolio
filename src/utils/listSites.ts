import severus from "../assets/projetc/severus.png";

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
    title: "SeverusTech",
    img: severus,
    about:
      "Este website foi desenvolvido com o propósito de apresentar e divulgar minha startup, que se concentra no desenvolvimento de software. Para a criação deste projeto, utilizamos tecnologias avançadas, incluindo ReactJS e TypeScript.",
    link: "https://severustech.netlify.app/",
    github: "",
  },
  {
    id: 3,
    title: "SeverusTech",
    img: severus,
    about:
      "Este website foi desenvolvido com o propósito de apresentar e divulgar minha startup, que se concentra no desenvolvimento de software. Para a criação deste projeto, utilizamos tecnologias avançadas, incluindo ReactJS e TypeScript.",
    link: "https://severustech.netlify.app/",
    github: "",
  },
  {
    id: 4,
    title: "SeverusTech",
    img: severus,
    about:
      "Este website foi desenvolvido com o propósito de apresentar e divulgar minha startup, que se concentra no desenvolvimento de software. Para a criação deste projeto, utilizamos tecnologias avançadas, incluindo ReactJS e TypeScript.",
    link: "https://severustech.netlify.app/",
    github: "",
  },
  {
    id: 5,
    title: "SeverusTech",
    img: severus,
    about:
      "Este website foi desenvolvido com o propósito de apresentar e divulgar minha startup, que se concentra no desenvolvimento de software. Para a criação deste projeto, utilizamos tecnologias avançadas, incluindo ReactJS e TypeScript.",
    link: "https://severustech.netlify.app/",
    github: "",
  },
];

export { listSites };
export type { IListSites };
