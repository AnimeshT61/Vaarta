import Navbar from "./components/Navbar.js";
import {Route} from "react-router-dom";
import Features from "./components/Features.js";
import Upcoming from "./components/Upcoming.js";
import Templates from "./components/Templates.js";
import Plans from "./components/Plans.js";
import './App.css';
import Footer from "./components/Footer.js";
import ComingSoon from "./components/ComingSoon.js";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Navbar}/>
      <Route exact path="/" component={Features}/>
      <Route exact path="/" component={Upcoming}/>
      <Route exact path="/" component={Templates}/>
      {/*<Route exact path="/" component={Plans}/>*/}
      <Route exact path="/" render={()=><Footer year={2021}/>}/>
      <Route exact path="/ComingSoon" component={ComingSoon} />
    </div>
  );
}

export default App;
