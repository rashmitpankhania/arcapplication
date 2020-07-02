import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
// noinspection ES6CheckImport
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './ui/Header';
import theme from './ui/Theme';
import { PageNames, Routes } from './Constants';
import Footer from './ui/Footer';
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/ServicesPage';
import CustomSoftwarePage from './pages/CustomSoftwarePage';
import MobileAppsPage from './pages/MobileAppsPage';
import WebsitePage from './pages/WebsitePage';
import RevolutionPage from './pages/RevolutionPage';
import ScrollToTop from './ui/ScrollToTop';
import AboutUsPage from './pages/AboutUsPage';

const App = () => {
  const [value, setValue] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path={Routes.HOME}
            render={() => (
              <LandingPage
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path={Routes.SERVICES}
            render={() => (
              <ServicesPage
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path={Routes.MOBILE_APPS}
            render={() => (
              <MobileAppsPage
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path={Routes.CUSTOM_SOFTWARE}
            render={() => (
              <CustomSoftwarePage
                setSelectedIndex={setSelectedIndex}
                setValue={setValue}
              />
            )}
          />
          <Route exact path={Routes.ESTIMATE} component={() => <h1>{PageNames.ESTIMATE}</h1>} />
          <Route
            exact
            path={Routes.REVOLUTION}
            render={() => (
              <RevolutionPage
                setSelectedIndex={setSelectedIndex}
                setValue={setValue}
              />
            )}
          />
          <Route
            exact
            path={Routes.ABOUT_US}
            render={() => (
              <AboutUsPage
                setSelectedIndex={setSelectedIndex}
                setValue={setValue}
              />
            )}
          />
          <Route exact path={Routes.CONTACT_US} component={() => <h1>{PageNames.CONTACT_US}</h1>} />
          <Route
            exact
            path={Routes.WEBSITES}
            render={() => (
              <WebsitePage
                setSelectedIndex={setSelectedIndex}
                setValue={setValue}
              />
            )}
          />
        </Switch>
        <Footer
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
