// UserGadgetNotLogged.js
import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useMyContext } from "./MyContext"; // Import the hook

function UserGadgetNotLogged() {
  const { lang } = useMyContext(); // Access the 'lang' value from the context

  return (
    <div>
      <Link to={`${lang}/user/login`}>
        <FormattedMessage id="login" />
      </Link>{" "}
      /{" "}
      <Link to={`${lang}/user/register`}>
        <FormattedMessage id="register" />
      </Link>
    </div>
  );
}

export default UserGadgetNotLogged;
