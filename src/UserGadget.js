import React from "react";

// components
import UserGadgetLogged from "./UserGadget.logged.js";
import UserGadgetNotLogged from "./UserGadget.notLogged";

const UserGadget = React.createClass({
  propTypes: {
    user: React.PropTypes.any,
  },
  contextTypes: {
    lang: React.PropTypes.string,
    user: React.PropTypes.any,
  },

  render: function () {
    let gadget =
      this.context.user !== null ? (
        <UserGadgetLogged userId={this.context.user.uid} />
      ) : (
        <UserGadgetNotLogged />
      );

    return <div className="user">{gadget}</div>;
  },
});

export default UserGadget;
