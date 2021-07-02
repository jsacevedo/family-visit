import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';

import ItineraryPage from './pages/ItineraryPage';
import DayPage from './pages/DayPage';
import SuggestionPage from './pages/SuggestionPage';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route path="/" component={ItineraryPage} exact />
            <Route path="/events/:id" component={DayPage} />
            <Route path="/suggestions" component={SuggestionPage} exact />
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
