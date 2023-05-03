import PropTypes from "prop-types";
import React from "react";
import Avatar from "avataaars";

export default function AvatarDisplay({ avatarParams }) {
  return (
    <div className="justify-end flex">
      <Avatar
        className="w-[80px] absolute z-20 mt-2 right-[2%]"
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
  );
}
AvatarDisplay.propTypes = {
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
