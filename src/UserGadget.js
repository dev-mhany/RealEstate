import React, { Component } from "react";
import UserGadgetLogged from "./UserGadget.logged.js";
import UserGadgetNotLogged from "./UserGadget.notLogged";
import { MyContextProvider } from "./MyContext";
import PropTypes from "prop-types";

class UserGadget extends Component {
  static propTypes = {
    lang: PropTypes.string,
    user: PropTypes.any,
  };

  render() {
    const { lang, user } = this.context;

    if (lang !== undefined && user !== undefined && user !== null) {
      return <UserGadgetLogged userId={user.uid} />;
    } else {
      return (
        <MyContextProvider>
          <UserGadgetNotLogged />
        </MyContextProvider>
      );
    }
  }
}

export default UserGadget;
