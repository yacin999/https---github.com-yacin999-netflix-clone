import './App.scss';
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
