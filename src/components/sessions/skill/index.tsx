import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { AiFillMobile } from "react-icons/ai";

import { CustomContainer } from "../../../styles/globalStyles";
import { typeSkill } from "../../../utils/typeSkill";
import { SkillBoard } from "../../skillBoard";
import { Title } from "../../Title";
import { CustomContentSkill } from "./styles";

export const Skill = () => {
  const carousel = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <CustomContainer>
      <CustomContentSkill>
        <Title title="Skill-Set" />
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {typeSkill.map((item, index) => {
              return (
                <>
                  <motion.div key={index} className="item">
                    <SkillBoard
                      title={item.title}
                      subtitle={item.path}
                      icon={item.icon}
                    />
                  </motion.div>
                </>
              );
            })}
          </motion.div>
        </motion.div>
      </CustomContentSkill>
    </CustomContainer>
  );
};
