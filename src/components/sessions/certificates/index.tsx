import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import severus from "../../../assets/projetc/severus.png";
import { CustomContainer } from "../../../styles/globalStyles";
import { listCertificatesCiber } from "../../../utils/listCertificatesCiber";
import { listCertificatesDevolpment } from "../../../utils/listCertificatesDevolpment";
import { CarouselCertificates } from "../../carouselCertificates";
import { Title } from "../../Title";
import { CustomContentCertificates } from "./styled";

export const Certificates = () => {
  const carousel = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <CustomContainer>
      <CustomContentCertificates>
        <Title title="Certificados Devolpment" />
        <CarouselCertificates list={listCertificatesDevolpment} />
        <Title title="Certificados Ciberseguraça" />
        <CarouselCertificates list={listCertificatesCiber} />
      </CustomContentCertificates>
    </CustomContainer>
  );
};
