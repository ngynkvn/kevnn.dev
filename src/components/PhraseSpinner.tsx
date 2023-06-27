import pug_dance from "../assets/pug_dance.gif";
import { useLayoutEffect, useRef, useState } from "react";
import "./phrase-spinner.css";

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

export const PhraseSpinner = () => {
  const [phrase, setPhrase] = useState(getRandomPhrase());
  const ref = useRef(null);
  const [w, setW] = useState<number | null>(null);
  useLayoutEffect(() => {
    console.log(ref.current);
    if (ref.current) {
      const span = ref.current as HTMLSpanElement;
      const { width } = span.getBoundingClientRect();
      setW(width);
    }
  }, [ref, phrase]);
  return (
    <div
      onClick={() => {
        setPhrase(getRandomPhrase());
      }}
    >
      <span className="spinny"></span>
      <span
        ref={ref}
        key={typeof phrase === "string" ? phrase : "pug_dance"}
        className="phrase-swap"
      >
        {phrase}
      </span>
      <div style={{ outline: "1px red solid", width: w || "" }}></div>
    </div>
  );
};
