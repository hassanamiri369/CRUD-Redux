import {BrowserRouter as Router , Link , Route , Switch} from "react-router-dom"
import Home from "./components/Home";
import Forms from "./components/Forms";

function App() {
  return (
    <div className="App">
      
   
      <Router>
      <div>
        <Link to="/form">Form</Link>
      </div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/form" component={Forms}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
