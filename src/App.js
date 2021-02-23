import './App.css';
import { Switch, Route } from 'react-router-dom'
import MainPage from './MainPage'
import MovieDetails from './MovieDetails'
import Favourites from './Favourites'
import Footer from './Footer'
import DefaultPage from './DefaultPage'


function App() {
  return (
    <div className="App">

      <Switch>

        <Route path='/' component={MainPage} exact />
        <Route path='/moviedetail/:id' component={MovieDetails} />
        <Route path='/favourites' component={Favourites} exact />
        <Route  component={DefaultPage} />


      </Switch>

      <Footer/>
    </div>
  );
}

export default App;
