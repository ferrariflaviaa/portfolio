import { useState } from "react";

import photo from "../../../assets/photoPerfil.png";
import { CustomContainer } from "../../../styles/globalStyles";
import { MenuProject } from "../../menuProjects";
import { ProjectPresentation } from "../../projectPresentation";
import { Title } from "../../Title";
import { CustomContentProject } from "./styles";

export const Project = () => {
  const [type, setType] = useState<string>("");
  return (
    <CustomContainer>
      <CustomContentProject>
        <Title title="PROJETO" />
        <MenuProject setType={setType} type={type} />
        <ProjectPresentation
          about="lorem"
          img={photo}
          link=".."
          title="Teste"
        />
      </CustomContentProject>
    </CustomContainer>
  );
};
