import { useEffect, useState, useRef } from "react";
import { AiFillMobile } from "react-icons/ai";

import { CustomContainer } from "../../../styles/globalStyles";
import { typeSkill } from "../../../utils/typeSkill";
import { SkillBoard } from "../../skillBoard";
import { Title } from "../../Title";
import { CustomContentSkill } from "./styles";

export const Skill = () => {
  return (
    <CustomContainer>
      <CustomContentSkill>
        <Title title="Skill-Set" />
        <div className="carousel">
          {typeSkill.map((item, index) => {
            return (
              <>
                <SkillBoard
                  title={item.title}
                  subtitle={item.path}
                  icon={item.icon}
                />
              </>
            );
          })}
        </div>
      </CustomContentSkill>
    </CustomContainer>
  );
};
