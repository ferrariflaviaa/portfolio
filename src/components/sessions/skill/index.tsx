import { AiFillMobile } from "react-icons/ai";

import { CustomContainer } from "../../../styles/globalStyles";
import { SkillBoard } from "../../skillBoard";
import { Title } from "../../Title";
import { CustomContentSkill } from "./styles";

export const Skill = () => {
  return (
    <CustomContainer>
      <CustomContentSkill>
        <Title title="Skill-Set" />
        <SkillBoard
          title="Web Development"
          subtitle="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e "
          icon={<AiFillMobile size={40} />}
        />
      </CustomContentSkill>
    </CustomContainer>
  );
};
