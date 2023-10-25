import { Dispatch, SetStateAction } from "react";
import { RiMenu3Fill } from "react-icons/ri";

import { ContainerHeader, NavHeader } from "./styles";

interface IHeaderProps {
  setMenuIsVisible: Dispatch<SetStateAction<boolean>>;
}

export const HeaderWeb = ({ setMenuIsVisible }: IHeaderProps) => {
  return (
    <ContainerHeader>
      <NavHeader>
        <a href="#home">Home</a>
        <a href="#skills">Habilidades</a>
        <a href="#project">Projetos</a>
        <a href="#certificates">Certificados</a>
        <a href="#contact">Contatos</a>
      </NavHeader>
      <RiMenu3Fill
        onClick={() => setMenuIsVisible(true)}
        className="mobile"
        size={40}
        style={{ color: " #ffff " }}
      />
    </ContainerHeader>
  );
};
