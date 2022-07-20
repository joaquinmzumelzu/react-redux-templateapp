import './App.css';
import { Route, BrowserRouter} from 'react-router-dom';
import Home from './Components/Home';
import Posts from './Components/Posts';

function App() {
  return (
      <div>


      <Route exact path='/'>
        <Home/>
      </Route>
     
     <Route exact path='/posts' component={Posts}/>

      </div>
     




  );
}

export default App;
