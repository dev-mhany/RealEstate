import React from "react";
import { useIntl } from "react-intl"; // Import useIntl hook

const Loader = ({ title }) => {
  const intl = useIntl(); // Use the useIntl hook

  return (
    <div className="text-center">
      <i className="fa fa-spinner fa-pulse" />{" "}
      {title && intl.formatMessage({ id: title })}
    </div>
  );
};

export default Loader;
