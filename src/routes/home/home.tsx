import "./index.css";
import { PhraseSpinner } from "../../components/PhraseSpinner";

export const Home = () => {
  const refresh = Math.random();
  return (
    <div>
      <h1>
        <PhraseSpinner key={refresh} />
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
