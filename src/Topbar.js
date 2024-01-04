import React from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import LangSwitcher from "./LangSwitcher";

class Topbar extends React.Component {
  render() {
    let langs = {
      ar: { text: "Arabic", code: "ar" },
      en: { text: "English", code: "en" },
    };

    const { lang } = this.context;

    return (
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text">
                {/* Replaced <a> with <button> for better accessibility */}
                <button className="link-button" aria-label="Location">
                  <i className="fa fa-map-marker" />{" "}
                  <FormattedMessage id="settings.country" />
                </button>
                <a href="tel:+201029384721">
                  <i className="fa fa-phone" />{" "}
                  <FormattedMessage id="settings.phoneNumber" />
                </a>
              </p>
              <p className="langSwitcher pull-right">
                <LangSwitcher langs={langs} currentLang={lang} />{" "}
                {/* Use the lang variable */}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Topbar.contextTypes = {
  lang: PropTypes.string,
  user: PropTypes.any,
};

export default Topbar;
