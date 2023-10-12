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
      <h2 className="sistema" onClick={() => handleColor("sistema")}>
        Sistemas
      </h2>
      <h2 className="aplicativo" onClick={() => handleColor("aplicativo")}>
        Aplicativos
      </h2>
    </CustomContainerMenuProject>
  );
};
