import { useNavigate } from "react-router-dom";
import duck from "../assets/duck.png";
import quack from "../assets/075176_duck-quack-40345.mp3";
import { useEffect } from "react";
// Quack
const divStyles: React.CSSProperties = {
  margin: "auto",
  height: "100%",
  width: "100%",
};
const imgStyles: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  translate: "-50% -50%",
};
export const Duck = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const audio = new Audio(quack);
    audio.volume = 0.2;
    audio.play();
  }, []);
  return (
    <div style={divStyles}>
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        <img alt="quack" style={imgStyles} src={duck} />
      </a>
    </div>
  );
};
