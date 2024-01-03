import React from "react";
import PropTypes from "prop-types"; // Import PropTypes from the correct package
import Image from "./Image";

function ProfilePic({ image, userId }) {
  const ref = `users/`;
  const defaultImg = "default.png";

  const imageUrl = image ? `${userId}/profilePic/${image}` : defaultImg;

  return <Image url={`${ref}/${imageUrl}`} />;
}

ProfilePic.propTypes = {
  image: PropTypes.string,
  userId: PropTypes.string.isRequired,
};

export default ProfilePic;
