import React from "react";
import SalesComponent from "../../components/contact";
import SupportComponent from "../../components/support";
import PropTypes from "prop-types";

import { Account, Rows, Title } from "./styles";

export const AccountOverview = ({ data }) => {
  const { supportContact, salesOverview } = data;

  return (
    <Account>
      <Rows>
        <Title>Account Overview</Title>
        <SupportComponent
          supportEmail={supportContact.email}
          supportName={supportContact.name}
          supportNumber={supportContact.number}
        />
      </Rows>
      <Rows>
        <SalesComponent
          lastUploadDate={salesOverview.lastUploadDate}
          linesAttempted={salesOverview.linesAttempted}
          linesSaved={salesOverview.linesSaved}
          successfulUploads={salesOverview.successfulUploads}
          uploads={salesOverview.uploads}
        />
      </Rows>
    </Account>
  );
};

AccountOverview.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountOverview;
