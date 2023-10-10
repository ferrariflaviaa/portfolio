import React from "react";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import photo from "../../../assets/photo.png";
import { CustomContainerApresentation } from "./styles";

export const Apresentation = () => {
  const link = {
    instagram: "https://www.instagram.com/severus.tech/",
    linkedin: "https://www.linkedin.com/in/dev-flavia-ferrari/",
    github: "https://github.com/ferrariflaviaa",
  };
  return (
    <CustomContainerApresentation>
      <div className="ciclePhoto" id="home">
        <img src={photo} alt="Foto de perfil" />
      </div>
      <div className="apresentation">
        <h2>FLÁVIA FERRARI</h2>
        <h3>CEO E DEVELOP</h3>
        <div className="networks">
          <a href={link.instagram} target="_blank">
            <AiFillInstagram
              style={{ width: "50px", height: "50px", color: "#000" }}
            />
          </a>
          <a href={link.linkedin} target="_blank">
            <AiFillLinkedin
              style={{ width: "50px", height: "50px", color: "#000" }}
            />
          </a>
          <a href={link.github} target="_blank">
            <AiFillGithub
              style={{ width: "50px", height: "50px", color: "#000" }}
            />
          </a>
        </div>
      </div>
    </CustomContainerApresentation>
  );
};
