import { Route, Switch } from 'react-router-dom';
import './App.css';
import Formcomponent from './components/formComponent/Form';
import Navbar from './components/Nav/Navbar';
import Tablecomponent from './components/tableComponent/Table';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Formcomponent}></Route>
        <Route path="/Contact" component={Tablecomponent}></Route>
      </Switch>
    </>
  );
}

export default App;
