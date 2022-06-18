import {BrowserRouter as Router , Link , Route , Switch} from "react-router-dom"
import Home from "./components/Home";
import Forms from "./components/Forms";
import UpdateDetails from "./components/UpdateDetails";

function App() {
  return (
    <div className="App">
      
   
      <div className="root-container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/form" component={Forms}/>
          <Route path="/edit/:id" component={UpdateDetails}/>
        </Switch>
      </Router>
      </div>
      
    </div>
  );
}

export default App;
