import databases from "../assets/couser/databases.png";
import php from "../assets/couser/php.png";
import reactDoZero from "../assets/couser/reactDoZero.png";

interface IListCertificatesDevolpment {
  id: number;
  alt: string;
  src: string;
  link: string;
}
const listCertificatesDevolpment: IListCertificatesDevolpment[] = [
  {
    id: 1,
    alt: "React Do Zero",
    src: reactDoZero,
    link: "https://www.udemy.com/certificate/UC-d4404cbf-95ec-4fdc-b041-be8864d7767b/",
  },
  {
    id: 2,
    alt: "Php",
    src: php,
    link: "https://www.udemy.com/certificate/UC-688df584-2d5c-4c55-936b-025c21b5b7dc/",
  },
  {
    id: 3,
    alt: "Databases",
    src: databases,
    link: "https://www.dio.me/certificate/9B977FA3/share",
  },
  {
    id: 4,
    alt: "SeverusTech",
    src: reactDoZero,
    link: "https://severustech.netlify.app/",
  },
];

export { listCertificatesDevolpment };
export type { IListCertificatesDevolpment };
