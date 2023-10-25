import ccna from "../assets/couser/ccna.png";
import solyd from "../assets/couser/solyd.jpg";
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
    alt: "Ccna",
    src: ccna,
    link: "https://www.credly.com/badges/74843bfe-acb5-45d5-ade5-f70e4d8cb94e?source=linked_in_profile",
  },
  {
    id: 2,
    alt: "Solyd Offensive Security",
    src: solyd,
    link: "",
  },
];

export { listCertificatesCiber };
export type { IListCertificatesCiber };
