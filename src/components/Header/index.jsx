import cn from "classnames";
import { useMediaQuery } from "../../shared/hooks/media-query.js";
import Logo from "../../shared/ui/icons/Logo/index.jsx";
import Phone from "../../shared/ui/icons/Phone/index.jsx";
import Burger from "../../shared/ui/icons/Burger/indes.jsx";
import Navigate from "../Navigate/index.jsx";
import styles from "./styles.module.scss";

export default function Header() {
  const mediaQuery = useMediaQuery("(max-width: 1050px)");

  return (
    <header className={cn(styles.header, "montserrat", "text_type_bold")}>
      <Logo
        classname={styles.header__logo}
        width={mediaQuery ? 96 : 168}
        height={mediaQuery ? 19 : 40}
      />
      {!mediaQuery && <Navigate />}
      <div className={styles["header__phone-contaiter"]}>
        {mediaQuery && <Burger />}
        <Phone width={40} height={40} />
        {!mediaQuery && (
          <p className={styles.header__number}>8-345-123-34-45</p>
        )}
      </div>
    </header>
  );
}
