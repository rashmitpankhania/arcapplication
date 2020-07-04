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
import ContactUsPage from './pages/ContactUsPage';

const list = [
  { path: Routes.HOME, component: LandingPage },
  { path: Routes.SERVICES, component: ServicesPage },
  { path: Routes.MOBILE_APPS, component: MobileAppsPage },
  { path: Routes.CUSTOM_SOFTWARE, component: CustomSoftwarePage },
  { path: Routes.REVOLUTION, component: RevolutionPage },
  { path: Routes.ABOUT_US, component: AboutUsPage },
  { path: Routes.CONTACT_US, component: ContactUsPage },
  { path: Routes.WEBSITES, component: WebsitePage },
  // { path: Routes.ESTIMATE, component: () => <h1>{PageNames.ESTIMATE}</h1> },
];

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
          {list.map((obj) => {
            const { component: Component, path } = obj;
            return <Route key={path} exact path={path} render={() => <Component setValue={setValue} setSelectedIndex={setSelectedIndex} />} />;
          })}
          <Route path={Routes.ESTIMATE} component={() => <h1>{PageNames.ESTIMATE}</h1>} />
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
