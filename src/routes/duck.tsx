import { useNavigate } from "react-router-dom";
import duck from "../assets/duck.png";
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
