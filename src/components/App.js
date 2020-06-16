import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
// noinspection ES6CheckImport
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './ui/Header';
import theme from './ui/Theme';
import { PageNames, Routes } from './Constants';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';
import ServicesPage from './ServicesPage';
import CustomSoftwarePage from './CustomSoftwarePage';

const App = () => {
  const [value, setValue] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
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
            component={() => <h1>{PageNames.MOBILE_APPS}</h1>}
          />
          <Route
            exact
            path={Routes.CUSTOM_SOFTWARE}
            render={() => <CustomSoftwarePage setSelectedIndex={setSelectedIndex} />}
          />
          <Route exact path={Routes.ESTIMATE} component={() => <h1>{PageNames.ESTIMATE}</h1>} />
          <Route exact path={Routes.REVOLUTION} component={() => <h1>{PageNames.REVOLUTION}</h1>} />
          <Route exact path={Routes.ABOUT_US} component={() => <h1>{PageNames.ABOUT_US}</h1>} />
          <Route exact path={Routes.CONTACT_US} component={() => <h1>{PageNames.CONTACT_US}</h1>} />
          <Route exact path={Routes.WEBSITES} component={() => <h1>{PageNames.WEBSITES}</h1>} />
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
