import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import UserGadget from "./UserGadget";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

class HeaderFront extends Component {
  static contextTypes = {
    lang: PropTypes.string,
    user: PropTypes.any,
  };

  render() {
    let lang = this.context.lang;

    return (
      <section>
        <header className="clearfix">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="logo">
                  <Link to={`/${lang}`}>
                    <img src="dist/images/logo.png" alt="HATA" />
                  </Link>
                </div>

                <nav className="navbar collapse" id="mobile-menu">
                  <ul className="nav navbar-nav">
                    <li>
                      <NavLink end activeClassName="active" to={`/${lang}`}>
                        <FormattedMessage id="menu.home" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to={`/${lang}/about/`}>
                        <FormattedMessage id="menu.about" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to={`/${lang}/contact/`}
                      >
                        <FormattedMessage id="menu.contact" />
                      </NavLink>
                    </li>
                  </ul>
                </nav>

                <UserGadget userId={this.context.user} />

                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#mobile-menu"
                  aria-expanded="false"
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
            </div>
          </div>
        </header>
      </section>
    );
  }
}

export default HeaderFront;
