import React from "react";

import photo from "../../../assets/photoPerfil.png";
import { CustomContainer } from "../../../styles/globalStyles";
import { Title } from "../../Title";
import { Content } from "./styles";

export const About = () => {
  return (
    <CustomContainer>
      <Content>
        <img src={photo} alt="Foto de perfil" />
        <div className="about">
          <Title title="Sobre mim" />
          <h3>
            Eu sou Flávia, uma profissional de tecnologia com formação em
            Análise e Desenvolvimento. Trabalho no desenvolvimento web e mobile
            e sou fundadora de uma startup de software. Além disso, dedico meu
            tempo livre ao estudo da segurança cibernética. Meu portfólio
            reflete meu compromisso com a inovação e a qualidade. <br /> <br />
            Vamos explorar oportunidades juntos?
          </h3>
        </div>
      </Content>
    </CustomContainer>
  );
};
