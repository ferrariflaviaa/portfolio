import { ReactNode } from "react";

import { CustomContainerSkillBoard, CustomIcon } from "./styles";

interface ISkillBoard {
  title: string;
  subtitle: string;
  icon: ReactNode;
}
export const SkillBoard = ({ icon, subtitle, title }: ISkillBoard) => {
  return (
    <CustomContainerSkillBoard>
      <CustomIcon>{icon}</CustomIcon>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </CustomContainerSkillBoard>
  );
};
