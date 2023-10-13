import github from "../../assets/icon/github.png";
import web from "../../assets/icon/web.png";
import { CustomContainerProjectPresentation } from "./styles";

interface IProjectPresentation {
  img: string;
  title: string;
  about: string;
  linkGithub: string;
  linkWeb: string;
}
export const ProjectPresentation = ({
  about,
  img,
  linkGithub,
  linkWeb,
  title,
}: IProjectPresentation) => {
  return (
    <CustomContainerProjectPresentation github={!!linkGithub} web={!!linkWeb}>
      <img src={img} alt="Imagem do projeto" className="imgProject" />
      <div className="about">
        <h1>{title}</h1>
        <h2>{about}</h2>
        <div className="redes">
          <a href={linkGithub} target="_blank" className="github">
            <img src={github} alt="icon do github" />
          </a>
          <a href={linkWeb} target="_blank" className="web">
            <img src={web} alt="icon do github" />
          </a>
        </div>
      </div>
    </CustomContainerProjectPresentation>
  );
};
