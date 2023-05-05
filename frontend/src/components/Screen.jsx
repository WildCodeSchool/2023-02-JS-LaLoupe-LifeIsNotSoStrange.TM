import "./Screen.css";
import PropTypes from "prop-types";
import { useState } from "react"; // import useState

import Map from "./MapApi";

function Screen({ position }) {
  const [currentImage, setCurrentImage] = useState(0); // initialize state for current image

  const images = [
    {
      src: "https://img.freepik.com/vetores-gratis/sala-de-conferencias-para-reunioes-de-negocios-a-noite_107791-3196.jpg?w=1380&t=st=1683208884~exp=1683209484~hmac=18fd8e97a07c3e0ee975660771fec3d707ea6cc52b2b9bb00f4159893084da5f",
      alt: "description1",
      id: 0,
    },
    {
      src: "https://img.freepik.com/vetores-gratis/fundo-da-paisagem-urbana-da-esquina-da-cidade-a-noite_107791-17753.jpg?w=1380&t=st=1683209047~exp=1683209647~hmac=3d7c6f42ef48e9f22e466c464e55a217bd88c102565ea6fccfd8f2e413bc68b1",
      alt: "description2",
      id: 1,
    },
    {
      src: "src/assets/GorillasInCar.jpg",
      alt: "description3",
      id: 2,
    },
    {
      src: "https://img.freepik.com/vetores-gratis/parque-da-cidade-com-bancos-e-lanternas-a-noite_107791-7918.jpg?w=1380&t=st=1683209690~exp=1683210290~hmac=020cdc3b29257d32a2ee15583a38b247b810df9dc6ca6aef6f8f38cad4819b2c",
      alt: "description1",
      id: 3,
    },
    {
      src: "src/assets/theGodrilla.jpg ",
      alt: "description2",
      id: 4,
    },
  ]; // array of images and their descriptions

  const handleClick = (index) => {
    setCurrentImage(index); // function to change the current image
  };

  return (
    <div className="relative">
      <img
        src={images[currentImage].src}
        alt={images[currentImage].alt}
        className="z-0 min-w-full max-h-[100%]"
      />{" "}
      {/* display the current image */}
      <div className="absolute top-0 left-0 z-10 w-1/5 ">
        <Map position={position} />
      </div>
      <div className="absolute bottom-0 left-0 z-10 w-full flex justify-center">
        {" "}
        {/* add a row of buttons to switch between images */}
        {images.map((image, index) => (
          <button
            type="button"
            key={images.id}
            className={`mx-2 px-2 py-1 rounded-full ${
              currentImage === index
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={() => handleClick(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

Screen.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Screen;
