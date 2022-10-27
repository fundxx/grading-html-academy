import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import FourZeroFour from '../four-zero-four/four-zero-four';
import { appTheme } from './common';
import * as S from './app.styled';
import DetailedQuestCheck from '../../hocs/detailed-quest-check/detailed-quest-check';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router>
      <Switch>
        <Route exact path="/detailed-quest/:id">
          <DetailedQuestCheck />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <FourZeroFour />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
