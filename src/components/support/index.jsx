import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import {
  Number,
  Support,
  SupportContent,
  SupportDetails,
  UserIcon,
  Name,
  Email,
} from "./styles";

export const SupportComponent = ({
  supportName,
  supportEmail,
  supportNumber,
}) => {
  return (
    <Support>
      <SupportDetails>your feefo support contact</SupportDetails>
      <SupportContent>
        <UserIcon>{supportName.slice(0, 1)}</UserIcon>
        <SupportDetails>
          <Name>{supportName}</Name>
          <Email>
            <FontAwesomeIcon icon={faEnvelope} /> {supportEmail}
          </Email>
        </SupportDetails>
        <Number>{supportNumber}</Number>
      </SupportContent>
    </Support>
  );
};

SupportComponent.propTypes = {
  supportName: PropTypes.string.isRequired,
  supportEmail: PropTypes.string.isRequired,
  supportNumber: PropTypes.string,
};

export default SupportComponent;
