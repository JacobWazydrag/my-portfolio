import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import createPorfolioTheme from './theme';
import TopBar from './components/topBar/topBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Layout from './components/layout/layout';
import Footer from './components/footer/footer';
import About from './pages/about/about';
import Featured from './pages/featured/featured';
import Portfolio from './pages/portfolio/portfolio';
import Blog from './pages/blog/blog';
import Contact from './pages/contact/contact';

function App() {
    return (
        <ThemeProvider theme={createPorfolioTheme('DARK')}>
            <BrowserRouter>
                <TopBar />
                <Switch>
                    <Layout>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/featured">
                            <Featured />
                        </Route>
                        <Route exact path="/portfolio">
                            <Portfolio />
                        </Route>
                        <Route exact path="/blog">
                            <Blog />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                        <Footer />
                    </Layout>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
