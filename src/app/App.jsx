import { useState } from "react";
import { useMediaQuery } from "../shared/hooks/media-query";
import Header from "../components/Header/index";
import Main from "../components/Main/index";
import Message from "../components/Message";
import Application from "../components/Application";
import Portal from "../components/Portal";
import styles from "./styles.module.scss";
import img from "../assets/image/mentor.png";

function App() {
  const mediaQuery = useMediaQuery("(max-width: 550px)");
  const [isOpen, setIsOpen] = useState(false);
  const [onSubmitBtn, setInSubmitBtn] = useState(false);

  const handleClickBtn = () => {
    setIsOpen((state) => !state);
  };

  const handleSubmitBtn = () => {
    setInSubmitBtn((state) => !state);
  };

  return (
    <div className={styles.app}>
      <div className={styles.app__overlay}>
        <Header />
        <Main onClick={handleClickBtn} />
        {!mediaQuery && (
          <img alt="mentor" className={styles.app__mentor} src={img} />
        )}
      </div>

      <Portal onClick={handleClickBtn} isOpen={isOpen}>
        {onSubmitBtn ? <Message /> : <Application onClick={handleSubmitBtn} />}
      </Portal>
    </div>
  );
}

export default App;
