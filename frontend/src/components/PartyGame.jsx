import PropTypes from "prop-types";
import Timer from "./Timer";
import Ecran from "./Ecran";
import Story from "./Story";
import AvatarDisplay from "./AvatarDisplay";

export default function PartyGame({ avatarParams }) {
  return (
    <div>
      <AvatarDisplay avatarParams={avatarParams} />
      <p>{avatarParams.pseudo}</p>
      <Timer />
      <Ecran />
      <Story />
    </div>
  );
}

PartyGame.propTypes = {
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
};
