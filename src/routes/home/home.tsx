import "./index.css";
import { PhraseSpinner } from "../../components/PhraseSpinner";

export const Home = () => {
  const refresh = Math.random();
  return (
    <div>
      <h1>
        <PhraseSpinner key={refresh} />
      </h1>
      <p>Oh hi.</p>
      <p>
        You've stumbled upon a React Single Page App I'm using to test out
        different libraries and components. Welcome to chaos :)
      </p>
    </div>
  );
};
