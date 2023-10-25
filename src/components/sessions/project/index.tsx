/* eslint-disable no-nested-ternary */
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

import { CustomContainer } from "../../../styles/globalStyles";
import { listApplication } from "../../../utils/listApplication";
import { IListSites, listSites } from "../../../utils/listSites";
import { listSiystem } from "../../../utils/listSiystem";
import { MenuProject } from "../../menuProjects";
import { ProjectPresentation } from "../../projectPresentation";
import { Title } from "../../Title";
import { CustomContentProject } from "./styles";

export const Project = () => {
  const [type, setType] = useState<string>("site");
  const [list, setList] = useState<IListSites[]>([]);
  const carousel = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number>(800);

  useEffect(() => {
    if (carousel.current) {
      setHeight(carousel.current.scrollHeight - carousel.current.offsetHeight);
    }
  }, [height]);

  useEffect(() => {
    setList(
      type === "site"
        ? listSites
        : type === "siystem"
        ? listSiystem
        : listApplication,
    );
  }, [type]);

  return (
    <CustomContainer>
      <CustomContentProject>
        <Title title="PROJETO" />
        <MenuProject setType={setType} type={type} />
        <motion.div
          ref={carousel}
          className="carousel"
          whileDrag={{ cursor: "grabbing" }}
        >
          <motion.div
            className="inner"
            drag="y"
            dragConstraints={{ top: -height, bottom: 0 }}
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {list.map((item) => {
              const { about, github, id, img, link, title } = item;
              return (
                <ProjectPresentation
                  key={id}
                  about={about}
                  img={img}
                  linkGithub={github}
                  linkWeb={link}
                  title={title}
                />
              );
            })}
          </motion.div>
        </motion.div>
      </CustomContentProject>
    </CustomContainer>
  );
};
