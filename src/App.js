import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./container/Routes"
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes />
    </Router>
  );
}

export default App;
