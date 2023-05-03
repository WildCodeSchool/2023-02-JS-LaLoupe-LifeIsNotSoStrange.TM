import PropTypes from "prop-types";
import { useState } from "react";

function Story({ endGame }) {
  const [chapter, setChapter] = useState("WELCOME !!!");
  const [message, setMessage] = useState(
    "La nuit tombe sur Toronto, la ville ne ressemble plus à ce qu'elle est en journée. Les rues calmes et sereines laissent place à une atmosphère sombre et inquiétante, propice aux activitées criminelles. Les lumières des lampadaires éclairent les rues désertes, illuminant les visages de ceux qui osent sortir après le coucher du soleil. Les pas des passants résonnent sur le bitume froid et glissant, faisant écho dans les ruelles sombres et étroites. Et c'est ici que tout a commencer"
  );
  const [result, setResult] = useState();
  const [options, setOptions] = useState([
    {
      id: "option1",
      text: "Commencer l'histoire",
      action: "chapter1",
      result: "",
    },
  ]);

  const handleOptionClick = (action) => {
    if (action === "lose") {
      setMessage();
      const lostOption = options.find((option) => option.action === "lose");
      setResult(lostOption.result);
      setOptions([
        {
          id: "option6",
          text: "Recommencez au chapitre 1",
          action: "chapter1",
        },
      ]);
    } else if (action === "chapter1") {
      setChapter("Chapitre 1");
      setMessage(
        "Vous êtes placeholder, un jeune détective privé de Toronto, vous vous noyez dans l'alcool suite à l'échec de votre dernière enquête. Alors que vous travaillez dans votre bureau, vous entendez un bruit de vitre brisée. Que faites-vous ?"
      );
      setOptions([
        {
          id: "option1",
          text: "Vous reprenez un verre et vous vous dîtes, Fichu chat",
          action: "lose",
          result: "Intoxication à l'alcool vous décedez gg go next. (perdu)",
        },
        {
          id: "option2",
          text: "Vous vous rapprochez de la fenêtre.",
          action: "chapter3",
          result:
            "Vous vous rapprochez de la fenêtre et distinguez une silhouette ressemblant au suspect principal de votre précedente enquête (c'était un échec). Vous prenez votre chapeau de détective et courrez dans la rue pour interpeller le suspect.",
        },
      ]);
    } else if (action === "chapter2") {
      setChapter("Chapitre 2");
      setMessage(
        "Vous vous rapprochez de la fenêtre et distinguez une silhouette ressemblant au suspect principal de votre précédente enquête (c'était un échec). Vous prenez votre chapeau de détective et courrez dans la rue pour interpeller le suspect. Vous arrivez dans la rue et voyez le suspect partir dans une ruelle, vous décidez de le suivre, mais un homme vous assomme. Vous vous réveillez dans une pièce. Votre seul moyen de s'échapper est de trouver le code qui ouvre la porte. Que faites-vous ?"
      );
      setResult("");
      setOptions([
        {
          id: "option3",
          text: "tape le mauvais code (fait un effort au bout d'un moment).",
          action: "lose",
          result: "Vous êtes nuls et donc mort. (perdu)",
        },
        {
          id: "option4",
          text: "Tape le bon code (ça va ce n'est pas la mer à boir non plus).",
          action: "chapter3",
          result: "Bravo chapitre suivant.",
        },
      ]);
    } else if (action === "chapter3") {
      setChapter("Chapitre 3");
      setMessage(
        "Vous reussissez a trouver le bon code et ouvrez la porte quand au moment de sortir, vous appercevez deux Gorilles arrivent en voiture. Ils vous dévisagent d'un air ahurie en vous voyant sortir des locaux. Que faites-vous ?"
      );
      setResult("");
      setOptions([
        {
          id: "option5",
          text: "Vous tentez la discussion.",
          action: "lose",
          result:
            "Tu ne parles pas le gorille. Tu retournes à l'énigme 1. (tu reflechis vraiment jamais hein ?)",
        },
        {
          id: "option6",
          text: "Vous prenez vos jambes à votre cou.",
          action: "chapter4",
          result:
            "Tu réussis à t'enfuir. Heureusement, tu es plus rapide qu'un gorille. Eh oui, les gorilles ne savent pas très bien conduire.",
        },
      ]);
    } else if (action === "chapter4") {
      setChapter("Chapitre 4");
      setMessage(
        "Vous réussissez à vous enfuir. Heureusement, tu es plus rapide qu'un gorille. Eh oui, les gorilles ne savent pas très bien conduire. Tu te retournes pour t'assurer que tu les as bien semé et tu reçois un appel de ton ancien partenaire de police: Xavier, ça fait un bail que tu n'avais plus de nouvelle de lui. Que fais-tu ?"
      );

      setOptions([
        {
          id: "option7",
          text: "Tu refuses l'appel.",
          action: "lose",
          result: "(perdu), ça ne se fait pas de refuser un appel de Xavier.",
        },
        {
          id: "option8",
          text: "Tu acceptes l'appel.",
          action: "chapter5",
          result:
            "Il te prévient que ton suspect a été aperçu aux chutes du Niagara.",
        },
      ]);
    } else if (action === "chapter5") {
      setChapter("Chapitre 5");
      setMessage(
        "Vous avez reussi a trouvez les coordonées corespondante aux chutes du Niagara et en y allant votre épreuve finale vous y attend de pied ferme: AH AH ! C'est moi qui suis le suspect! dit Quentin de Vancouver, le pablo escobar canadien."
      );
      setResult("");
      setOptions([
        {
          id: "option9",
          text: "Vous vous battez, mais attention ça glisse.",
          action: "lose",
          result:
            "Vous vous battez férocement et vous êtes sur le point de glisser mais vous vous rattrapez in extremis. Par contre votre lacet ce défait, ce qui vous fait tomber au moment où vous refaites un pas. (ah ba ça cépadpo)",
        },
        {
          id: "option10",
          text: "Vous lui révélez vos sentiments et vous espérez qu'il change.",
          action: "chapter6",
          result:
            "Vous tombez sous le charme l'un de l'autre et allez vers le soleil couchant tandis que le rayonement de l'amour rechauffe vos coeurs noirs ;)",
        },
      ]);
    } else if (action === "chapter6") {
      setChapter("Chapitre 6");
      setMessage(
        "Vous tombez sous le charme l'un de l'autre et allez vers le soleil couchant tandis que le rayonement de l'amour rechauffe vos coeurs noirs ;)"
      );
      setResult("C'est gagné !");
      endGame();
      setOptions([
        {
          id: "",
          text: "",
          action: "",
          result: "",
        },
        {
          id: "",
          text: "",
          action: "chapter6",
          result: "",
        },
      ]);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-[80%] ml-auto mr-auto">
      <h1 className="text-3xl font-bold text-white mb-4">{chapter}</h1>
      <p className="text-lg text-gray-300 mb-8">{message}</p>
      <div className="space-y-4">
        {options.map((option) => (
          <button
            type="button"
            key={option.id}
            className="bg-purple-800 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 text-white font-medium py-2 px-4 rounded-lg h-[60px] mr-[32px]"
            onClick={() => handleOptionClick(option.action)}
          >
            {option.text}
          </button>
        ))}
      </div>
      <p className="text-base text-gray-400 mt-8">{result}</p>
    </div>
  );
}

Story.propTypes = {
  endGame: PropTypes.func.isRequired,
};

export default Story;
