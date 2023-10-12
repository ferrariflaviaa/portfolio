import { useState } from "react";

import { CustomContainer } from "../../../styles/globalStyles";
import { MenuProject } from "../../menuProjects";
import { Title } from "../../Title";
import { CustomContentProject } from "./styles";

export const Project = () => {
  const [type, setType] = useState<string>("");
  return (
    <CustomContainer>
      <CustomContentProject>
        <Title title="PROJETO" />
        <MenuProject setType={setType} type={type} />
      </CustomContentProject>
    </CustomContainer>
  );
};
