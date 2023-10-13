/* eslint-disable no-nested-ternary */
import { useEffect, useState } from "react";

import photo from "../../../assets/photoPerfil.png";
import { CustomContainer } from "../../../styles/globalStyles";
import { listApplication } from "../../../utils/listApplication";
import { IListSites, listSites } from "../../../utils/listSites";
import { listSiystem } from "../../../utils/listSiystem";
import { MenuProject } from "../../menuProjects";
import { ProjectPresentation } from "../../projectPresentation";
import { Title } from "../../Title";
import { CustomContentProject } from "./styles";

export const Project = () => {
  const [type, setType] = useState<string>("site");
  const [list, setList] = useState<IListSites[]>([]);

  useEffect(() => {
    setList(
      type === "site"
        ? listSites
        : type === "siystem"
        ? listSiystem
        : listApplication,
    );
  }, [type]);

  return (
    <CustomContainer>
      <CustomContentProject>
        <Title title="PROJETO" />
        <MenuProject setType={setType} type={type} />
        {list.map((item, index) => {
          const { about, github, id, img, link, title } = item;
          return (
            <>
              <ProjectPresentation
                key={index}
                about={about}
                img={img}
                link={link}
                title={title}
              />
            </>
          );
        })}
      </CustomContentProject>
    </CustomContainer>
  );
};
