import "./Toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import { useState } from "react";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const [bgColor, setBgColor] = useState(true);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
    setBgColor(!bgColor);
  };

  return (
    <div className={bgColor ? 't' : 't-active'}>
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 20 }}
      ></div>
    </div>
  );
};

export default Toggle;