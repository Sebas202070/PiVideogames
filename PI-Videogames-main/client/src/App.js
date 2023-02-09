import './App.css';

import { Route, useLocation } from 'react-router-dom';

import { Form,Detail,Home, LandingPage } from './views';
import NavBar from './components/navbar/NavBar';

function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar/>}
      <Route exact path="/" component={LandingPage}/>
      <Route  path="/home" component={Home}/>
      <Route exact path="/detail/:id" component={Detail}/>
      <Route exact path="/create" component={Form}/>
   
     
    </div>
    
  );
}

export default App;
