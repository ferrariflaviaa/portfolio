import { About } from "./about";
import { Apresentation } from "./apresentation";
import { Certificates } from "./certificates";
import { Footer } from "./footer";
import { Project } from "./project";
import { Skill } from "./skill";

export const Sessions = () => {
  return (
    <>
      <Apresentation />
      <About />
      <Skill />
      <Project />
    </>
  );
};
