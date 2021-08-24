import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import createPorfolioTheme from './theme';
import TopBar from './components/topBar/topBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';

function App() {
  return (
    <ThemeProvider theme={createPorfolioTheme('DARK')}>
      <BrowserRouter>
        <TopBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
