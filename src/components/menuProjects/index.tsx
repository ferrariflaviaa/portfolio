import { Dispatch, SetStateAction } from "react";

import { CustomContainerMenuProject } from "./styles";

interface IMenuProject {
  type: string;
  setType: Dispatch<SetStateAction<string>>;
}
export const MenuProject = ({ setType, type }: IMenuProject) => {
  const handleColor = (type: string) => {
    setType(type);
  };
  return (
    <CustomContainerMenuProject type={type}>
      <h2 className="site" onClick={() => handleColor("site")}>
        Sites
      </h2>
      <h2 className="siystem" onClick={() => handleColor("siystem")}>
        Sistemas
      </h2>
      <h2 className="application" onClick={() => handleColor("application")}>
        Aplicativos
      </h2>
    </CustomContainerMenuProject>
  );
};
