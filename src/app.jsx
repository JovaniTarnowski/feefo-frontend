import AccountOverview from "./container/account-overview/index.jsx";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles.colors.js";

function App() {
  const accountOverviewStub = {
    supportContact: {
      name: "John Smith",
      email: "john.smith@feefo.com",
      number: "020 3362 4208",
    },
    salesOverview: {
      uploads: 8,
      successfulUploads: 3,
      linesAttempted: 20,
      linesSaved: 4,
      lastUploadDate: 1605001226079,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <AccountOverview data={accountOverviewStub} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
