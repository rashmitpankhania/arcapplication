import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
// noinspection ES6CheckImport
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './ui/Header';
import theme from './ui/Theme';
import { PageNames, Routes } from './Constants';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={Routes.HOME} component={() => <h1>{PageNames.HOME}</h1>} />
        <Route exact path={Routes.SERVICES} component={() => <h1>{PageNames.SERVICES}</h1>} />
        <Route exact path={Routes.MOBILE_APPS} component={() => <h1>{PageNames.MOBILE_APPS}</h1>} />
        <Route
          exact
          path={Routes.CUSTOM_SOFTWARE}
          component={() => <h1>{PageNames.CUSTOM_SOFTWARE}</h1>}
        />
        <Route exact path={Routes.ESTIMATE} component={() => <h1>{PageNames.ESTIMATE}</h1>} />
        <Route exact path={Routes.REVOLUTION} component={() => <h1>{PageNames.REVOLUTION}</h1>} />
        <Route exact path={Routes.ABOUT_US} component={() => <h1>{PageNames.ABOUT_US}</h1>} />
        <Route exact path={Routes.CONTACT_US} component={() => <h1>{PageNames.CONTACT_US}</h1>} />
        <Route exact path={Routes.WEBSITES} component={() => <h1>{PageNames.WEBSITES}</h1>} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
