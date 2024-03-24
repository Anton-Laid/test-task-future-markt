import TextMaskInput from "react-text-mask";
import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

import { validateInput } from "../../../utils/utils";
import { maskPhone } from "../../../../assets/constants/constants";

export default function Input(props) {
  const [values, setValues] = useState({ [props.name]: "" });

  useEffect(() => {
    props.getValid(validateInput(props.type, values[props.name]).invalid);
    // eslint-disable-next-line
  }, [values]);

  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValues({ ...values, [props.name]: inputValue });
  };
  const clssInput = cn(
    styles.input,
    props.className,
    {
      [styles.input_err]: !validateInput(props.type, values[props.name])
        .invalid,
    },
    "montserrat",
    "text_type_regular"
  );

  return props.type === "text" ? (
    <input
      onChange={handleInputChange}
      style={{ marginBottom: props.marginBottom }}
      className={clssInput}
      value={values[props.name]}
      type={props.type}
      placeholder={props.placeholder}
      maxLength={props.maxLength}
      minLength={props.minLength}
    />
  ) : (
    <TextMaskInput
      placeholder={props.placeholder}
      mask={maskPhone}
      className={clssInput}
      value={values[props.name]}
      onChange={handleInputChange}
    />
  );
}
