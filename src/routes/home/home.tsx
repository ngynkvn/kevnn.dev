import "./index.css";
import "./phrase-swap.css";

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
    ":pug-dance:",
  ];
  return phrases[Math.floor(Math.random() * phrases.length)];
}

export const Home = () => {
  const phrase = getRandomPhrase();
  return (
    <div>
      <h1>
        <span className="spinny"></span>
        <span key={phrase} className="phrase-swap">
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
