import "./index.css";
import "./phrase-swap.css";
import pug_dance from "../../assets/pug_dance.gif";

function getRandomPhrase() {
  const phrases = [
    "YOOOOOOOOOOOOOOO",
    "Hey there, it's Kevin.",
    "Hi! I'm Kevin.",
    "Howdy, it's Kev",
    "Kev here! ",
    "Welcome to Kevin's portfolio.",
    "Kevin says hello!",
    "Kepp!",
    <img src={pug_dance} />,
  ];
  return phrases[Math.floor(Math.random() * phrases.length)];
}

export const Home = () => {
  const phrase = getRandomPhrase();
  return (
    <div>
      <h1>
        <span className="spinny"></span>
        <span
          key={typeof phrase === "string" ? phrase : "pug_dance"}
          className="phrase-swap"
        >
          {phrase}
        </span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolor hic
        nostrum, dolorum officiis enim, laboriosam adipisci sint eos delectus
        alias fugit cupiditate nesciunt similique nobis aut. Eaque, commodi
        voluptas.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolor hic
        nostrum, dolorum officiis enim, laboriosam adipisci sint eos delectus
        alias fugit cupiditate nesciunt similique nobis aut. Eaque, commodi
        voluptas.
      </p>
    </div>
  );
};
