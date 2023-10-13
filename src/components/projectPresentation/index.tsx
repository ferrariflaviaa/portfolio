import github from "../../assets/icon/github.png";
import { CustomContainerProjectPresentation } from "./styles";

interface IProjectPresentation {
  img: string;
  title: string;
  about: string;
  link: string;
}
export const ProjectPresentation = ({
  about,
  img,
  link,
  title,
}: IProjectPresentation) => {
  return (
    <CustomContainerProjectPresentation>
      <img src={img} alt="Imagem do projeto" />
      <div className="about">
        <h1>{title}</h1>
        <h2>{about}</h2>
        <a href={link} target="_blank">
          <img src={github} alt="icon do github" />
        </a>
      </div>
    </CustomContainerProjectPresentation>
  );
};
