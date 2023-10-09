import { useState } from "react";

import { HeaderMobile } from "./mobile";
import { HeaderWeb } from "./web";

export const Header = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <HeaderMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <HeaderWeb setMenuIsVisible={setMenuIsVisible} />
    </>
  );
};
