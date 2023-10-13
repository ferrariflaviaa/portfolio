import severus from "../assets/projetc/severus.png";

interface IListCertificatesCiber {
  id: number;
  alt: string;
  src: string;
  link: string;
}
const listCertificatesCiber: IListCertificatesCiber[] = [
  {
    id: 1,
    alt: "SeverusTech",
    src: severus,
    link: "https://severustech.netlify.app/",
  },
  {
    id: 2,
    alt: "SeverusTech",
    src: severus,
    link: "https://severustech.netlify.app/",
  },
  {
    id: 3,
    alt: "SeverusTech",
    src: severus,
    link: "https://severustech.netlify.app/",
  },
  {
    id: 4,
    alt: "SeverusTech",
    src: severus,
    link: "https://severustech.netlify.app/",
  },
];

export { listCertificatesCiber };
export type { IListCertificatesCiber };
