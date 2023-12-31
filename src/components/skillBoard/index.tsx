import { ReactNode } from "react";

import { CustomContainerSkillBoard } from "./styles";

interface ISkillBoard {
  title: string;
  subtitle: string;
  icon: string;
}
export const SkillBoard = ({ icon, subtitle, title }: ISkillBoard) => {
  return (
    <CustomContainerSkillBoard>
      <img src={icon} alt="" style={{ width: 50, height: 50 }} />
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </CustomContainerSkillBoard>
  );
};
