import { About } from "./about";
import { Apresentation } from "./apresentation";
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
