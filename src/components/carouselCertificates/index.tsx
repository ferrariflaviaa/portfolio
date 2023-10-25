import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { IListCertificatesDevolpment } from "../../utils/listCertificatesDevolpment";

interface ICarouselCertificates {
  list: IListCertificatesDevolpment[];
}
export const CarouselCertificates = ({ list }: ICarouselCertificates) => {
  const carousel = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);
  return (
    <motion.div
      ref={carousel}
      className="carousel"
      whileDrag={{ cursor: "grabbing" }}
    >
      <motion.div
        className="inner"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {list.map((item) => {
          const { id, link, alt, src } = item;
          return (
            <motion.div key={id}>
              <a href={link} target="_blank">
                <img key={id} src={src} alt={alt} />;
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};
