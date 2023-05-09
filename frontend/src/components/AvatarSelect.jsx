import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Avatar from "avataaars";
import "./AvatarSelect.css";

export default function AvatarSelect({ avatarParams, setAvatarParams }) {
  const navigate = useNavigate();
  const handleAvatarParamsChange = (param, value) => {
    setAvatarParams((prevParams) => ({
      ...prevParams,
      [param]: value,
    }));
  };

  const handleSaveButton = () => {
    if (avatarParams.pseudo) {
      navigate("/selectstory");
    } else {
      alert("Veuillez entrer un pseudo");
    }
  };

  return (
    <div>
      <div className="flex justify-center sm:object-scale-down">
        <Avatar
          accessoriesType={avatarParams.accessoriesType}
          avatarStyle={avatarParams.avatarStyle}
          clotheColor={avatarParams.clotheColor}
          clotheType={avatarParams.clotheType}
          eyeType={avatarParams.eyeType}
          eyebrowType={avatarParams.eyebrowType}
          facialHairColor={avatarParams.facialHairColor}
          facialHairType={avatarParams.facialHairType}
          hairColor={avatarParams.hairColor}
          mouthType={avatarParams.mouthType}
          skinColor={avatarParams.skinColor}
          topType={avatarParams.topType}
          pseudo={avatarParams.pseudo}
        />
      </div>
      <div className="avatarCreator grid justify-center gap-5 text-l  mb-3 max-[768px]:text-xs">
        <label className="text-white m-auto">
          Accessoires :
          <select
            className="text-black rounded-md ml-2 cursor-pointer"
            value={avatarParams.accessoriesType}
            onChange={(e) =>
              handleAvatarParamsChange("accessoriesType", e.target.value)
            }
          >
            <option value="Blank">Aucun</option>
            <option value="Round">Lunettes</option>
            <option value="Sunglasses">Lunettes de soleil</option>
            <option value="Kurt">Kurt</option>
          </select>
        </label>
        <label className="text-white">
          Cheveux :
          <select
            className="text-black rounded-md ml-2 cursor-pointer"
            value={avatarParams.topType}
            onChange={(e) =>
              handleAvatarParamsChange("topType", e.target.value)
            }
          >
            <option value="ShortHairShortCurly">Cheveux courts bouclés</option>
            <option value="ShortHairShortFlat">Cheveux courts</option>
            <option value="Hijab">Hijab</option>
            <option value="Eyepatch">Jack Sparrow</option>
            <option value="LongHairStraight">Cheveux Long</option>
          </select>
        </label>
        <label className="text-white">
          Couleur de cheveux :
          <select
            className="text-black rounded-md ml-2 cursor-pointer"
            value={avatarParams.hairColor}
            onChange={(e) =>
              handleAvatarParamsChange("hairColor", e.target.value)
            }
          >
            <option value="Black">Noir</option>
            <option value="Blonde">Blond</option>
            <option value="Brown">Marron</option>
            <option value="SilverGray">Gris</option>
            <option value="Auburn">Roux</option>
          </select>
        </label>
        <label className="text-white">
          Type de barbe :
          <select
            className="text-black rounded-md ml-2 cursor-pointer"
            value={avatarParams.facialHairType}
            onChange={(e) =>
              handleAvatarParamsChange("facialHairType", e.target.value)
            }
          >
            <option value="Blank">Aucun</option>
            <option value="BeardLight">Barbe courte</option>
            <option value="MoustacheMagnum">Moustache</option>
          </select>
        </label>
        <label className="text-white">
          Couleur de la barbe :
          <select
            className="text-black rounded-md ml-2 cursor-pointer"
            value={avatarParams.facialHairColor}
            onChange={(e) =>
              handleAvatarParamsChange("facialHairColor", e.target.value)
            }
          >
            <option value="Black">Noir</option>
            <option value="Blonde">Blond</option>
            <option value="Brown">Marron</option>
            <option value="SilverGray">Gris</option>
          </select>
        </label>
        <label className="text-white">
          Vêtements :
          <select
            className="text-black rounded-md ml-2 cursor-pointer"
            value={avatarParams.clotheType}
            onChange={(e) =>
              handleAvatarParamsChange("clotheType", e.target.value)
            }
          >
            <option value="BlazerShirt">Zalando</option>
            <option value="Hoodie">H&M</option>
            <option value="Overall">Kiabi</option>
          </select>
        </label>
        <label className="text-white">
          Pseudo :
          <input
            className="text-black w-28 text-center rounded-md ml-2"
            type="text"
            value={avatarParams.pseudo}
            onChange={(e) => handleAvatarParamsChange("pseudo", e.target.value)}
          />
        </label>
        <button
          type="button"
          onClick={handleSaveButton}
          className=" bg-white rounded-md mb-2"
        >
          Sauvegarder
        </button>
      </div>
    </div>
  );
}
AvatarSelect.propTypes = {
  avatarParams: PropTypes.shape({
    avatarStyle: PropTypes.string.isRequired,
    accessoriesType: PropTypes.string.isRequired,
    topType: PropTypes.string.isRequired,
    clotheColor: PropTypes.string.isRequired,
    clotheType: PropTypes.string.isRequired,
    eyeType: PropTypes.string.isRequired,
    eyebrowType: PropTypes.string.isRequired,
    facialHairColor: PropTypes.string.isRequired,
    facialHairType: PropTypes.string.isRequired,
    hairColor: PropTypes.string.isRequired,
    mouthType: PropTypes.string.isRequired,
    skinColor: PropTypes.string.isRequired,
    pseudo: PropTypes.string.isRequired,
  }).isRequired,
  setAvatarParams: PropTypes.func.isRequired,
};
