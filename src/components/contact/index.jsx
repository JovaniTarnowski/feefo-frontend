import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import theme from "../../styles.colors";

import {
  BisGreen,
  Sales,
  BoldAttribute,
  PercentageElement,
  SalesPadding,
  UpperCase,
  HeadCard,
  PercentageSection,
} from "./styles";

export const SalesComponent = ({
  linesAttempted,
  linesSaved,
  successfulUploads,
  uploads,
}) => {
  const percentageUploads = (successfulUploads * 100) / uploads;
  const percentageLines = (linesSaved * 100) / linesAttempted;

  return (
    <Sales>
      <HeadCard>
        <BoldAttribute>
          <FontAwesomeIcon color={theme.blue} icon={faUpload} /> Sales
        </BoldAttribute>
        <FontAwesomeIcon color={theme.grey} icon={faInfoCircle} />
      </HeadCard>
      <SalesPadding>
        You had <BoldAttribute>{successfulUploads} uploads</BoldAttribute> and{" "}
        <BoldAttribute>{linesSaved}</BoldAttribute> lines added.
      </SalesPadding>
      <PercentageSection>
        <PercentageElement>
          <BisGreen>
            {percentageUploads > 100 ? 100 : percentageUploads}%
          </BisGreen>
          <UpperCase> UPLOAD SUCCESS</UpperCase>
        </PercentageElement>
        <PercentageElement>
          <BisGreen>{percentageLines > 100 ? 100 : percentageLines}%</BisGreen>
          <UpperCase> LINES SAVED</UpperCase>
        </PercentageElement>
      </PercentageSection>
    </Sales>
  );
};

SalesComponent.propTypes = {
  lastUploadDate: PropTypes.number,
  linesAttempted: PropTypes.number.isRequired,
  linesSaved: PropTypes.number.isRequired,
  successfulUploads: PropTypes.number.isRequired,
  uploads: PropTypes.number.isRequired,
};

export default SalesComponent;
