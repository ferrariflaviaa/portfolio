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
          <Title title="Sobre me" />
          <h4>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos, como também ao salto para a
            editoração eletrônica, permanecendo essencialmente inalterado
          </h4>
        </div>
      </Content>
    </CustomContainer>
  );
};
