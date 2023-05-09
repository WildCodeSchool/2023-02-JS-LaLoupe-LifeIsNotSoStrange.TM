import PropTypes from "prop-types";
import AvatarSelect from "./AvatarSelect";
import Intro from "./Intro";

function Home({ avatarParams, setAvatarParams }) {
  return (
    <div className=" flex flex-col justify-between items-center">
      <Intro />
      <AvatarSelect
        avatarParams={avatarParams}
        setAvatarParams={setAvatarParams}
      />
    </div>
  );
}
Home.propTypes = {
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
export default Home;
