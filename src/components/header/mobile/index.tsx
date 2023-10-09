import { Dispatch, SetStateAction, useEffect } from "react";
import { IoClose } from "react-icons/io5";

import { Container } from "./styles.js";

interface IMenuMobileProps {
  menuIsVisible: boolean;
  setMenuIsVisible: Dispatch<SetStateAction<boolean>>;
}

export function HeaderMobile({
  menuIsVisible,
  setMenuIsVisible,
}: IMenuMobileProps) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);

  return (
    <Container isVisible={menuIsVisible}>
      <IoClose
        size={45}
        onClick={() => setMenuIsVisible(false)}
        style={{ color: "#ffff" }}
      />
      <nav>
        <a href="#home" onClick={() => setMenuIsVisible(false)}>
          Home
        </a>
        <a href="#skills" onClick={() => setMenuIsVisible(false)}>
          Habilidades
        </a>
        <a href="#project" onClick={() => setMenuIsVisible(false)}>
          Projetos
        </a>
        <a href="#certificates" onClick={() => setMenuIsVisible(false)}>
          Certificados
        </a>
        <a href="#contact" onClick={() => setMenuIsVisible(false)}>
          Contatos
        </a>
      </nav>
    </Container>
  );
}
