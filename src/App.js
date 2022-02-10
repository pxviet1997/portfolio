import {
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
