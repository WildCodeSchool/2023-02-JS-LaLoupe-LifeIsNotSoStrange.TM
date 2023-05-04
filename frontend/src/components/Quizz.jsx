import React, { useState, useEffect } from "react";

import TypeWriterEffect from "react-typewriter-effect";

import "./Quizz.css";

const Quizz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const questions = [
    {
      id: 1,
      question:
        "Hey salut! Tu es le nouveau que Billy a embauché c'est ça? Bon écoute, je n'ai pas le temps de t'expliquer le boulot. On va être en plein rush et notre clientèle n'aime pas attendre ! Ne te plante pas dans les commandes! Si tu as un bon chiffre à la fin du service, peut-être que tu seras l'employé de l'année, un truc dans le genre. Je te laisse avec la carte des cocktails, ça peut toujours servir. Par contre elle ne comprend que l'anglais, ouais je sais c'est pas ouf.",
      options: ["Moi je venais pour les wc", "Ok", "C'est pas ouf"],
      correctAnswer: "Ok",
    },
    {
      id: 2,
      question:
        "Salut! Moi c'est Fizz. Tu me mets la même chose que d'habitude! Mais si, le truc avec du powdered sugar! Allez avec ça je me sens comme Napoléon.",
      options: [
        "Japanese Fizz",
        "Amaretto Fizz",
        "Imperial Fizz",
        "Royal Gin Fizz",
      ],
      correctAnswer: "Imperial Fizz",
    },
    {
      id: 3,
      question:
        "Yop, J'ai besoin d'un petit remontant! Quelque chose qui me donne des ailes, et qui me fait penser à D and D. ",
      options: [
        "Dodo Airlines",
        "Dragon Fly",
        "Flying Outchman",
        "Butterfly Effect",
      ],
      correctAnswer: "Dragon Fly",
    },
    {
      id: 4,
      question:
        "J'aurai besoin d'un verre, mais surtout pas ce bleu immonde où des poissons sont dedans.",
      options: ["Aqua poney", "National Aquarium", "Aquamarine", "Aqualand"],
      correctAnswer: "National Aquarium",
    },
    {
      id: 5,
      question:
        "Je suis un cocktail classique qui a été créé au début des années 1900. Je suis fait avec du gin, du vermouth et une olive en garniture. Mon nom est également le nom d'une ville en Italie.",
      options: ["Martini", "James bond Cocktail", "Virgin Morito", "Xavier ?"],
      correctAnswer: "Martini",
    },
  ];
  useEffect(() => {
    document.activeElement?.blur();
  }, [answers]);

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    setCurrentQuestion(currentQuestion + 1);
  };
  // const handleAnswer = (answer) => {
  //   setAnswers({ ...answers, [currentQuestion]: answer });
  //   if (currentQuestion < questions.length - 1) {
  //     setCurrentQuestion(currentQuestion + 1);
  //   }
  // };

  const score = Object.values(answers).reduce((acc, answer, index) => {
    return answer === questions[index].correctAnswer ? acc + 1 : acc;
  }, 0);

  if (currentQuestion === questions.length) {
    return (
      <div>
        <h1>Résultat</h1>
        <p>
          Vous avez obtenu {score} pourboires sur {questions.length} commandes.
        </p>
      </div>
    );
  }

  return (
    <div className=" font-bold m-10 rounded-md flex-col bg-gradient-to-tr to-blue-400 from-green-500 p-4">
      <h1 className="p-2">Commande </h1>
      {/* <p className="p-2 animate-typing border-r-2 whitespace-nowrap tracking-widest border-r-white pr-5 text-black font-extrabold">
        {questions[currentQuestion].question}
      </p> */}
      <p>
        <TypeWriterEffect
          className="p-2  border-r-white pr-5 text-black font-extrabold"
          textStyle={{ fontFamily: "Red Hat Display" }}
          startDelay={100}
          cursorColor="black"
          text={questions[currentQuestion].question}
          typeSpeed={40}
        />
      </p>
      <ul>
        {questions[currentQuestion].options.map((option) => (
          <li className="p-3" key={option.id}>
            <button
              className="btn "
              type="button"
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quizz;
