import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import { Link, useNavigate } from "react-router-dom"; // Import Link
import ProfilePic from "./ProfilePic";
import { FormattedMessage } from "react-intl";

const UserGadgetLogged = ({ userId }) => {
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const database = getDatabase();
    const userRef = ref(database, `users/${userId}`);
    const unsubscribe = onValue(userRef, (snapshot) => {
      const userData = snapshot.val();
      if (userData) {
        setCurrentUser(userData);
      }
    });
    return () => unsubscribe();
  }, [userId]);

  const handleLogout = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  let lang = "en"; // Replace with your language logic

  return (
    <div>
      <button className="dropdown-toggle" data-toggle="dropdown">
        <ProfilePic image={currentUser.image} userId={userId} />
        <span className="userName">{currentUser.fname}</span>
        <span className="drop-arow" />
      </button>

      <ul className="dropdown-menu user-drop">
        <li>
          <Link to={`${lang}/user/profile/${userId}`}>
            <i className="fa fa-user" />
            <FormattedMessage id="userLinks.myProfile" />
          </Link>
        </li>
        <li>
          <Link to={`${lang}/user/profile/edit`}>
            <i className="fa fa-user" />
            <FormattedMessage id="userLinks.editMyProfile" />
          </Link>
        </li>
        <li>
          <Link to={`${lang}/user/dashboard/properties`}>
            <i className="fa fa-list" />
            <FormattedMessage id="userLinks.myProperties" />
          </Link>
        </li>
        <li>
          <button onClick={handleLogout} className="logout-button">
            <i className="fa fa-sign-out" />
            <FormattedMessage id="userLinks.logout" />
          </button>
        </li>
      </ul>
    </div>
  );
};

UserGadgetLogged.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserGadgetLogged;
