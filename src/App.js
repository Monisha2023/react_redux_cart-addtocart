import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import {Routes, Route} from 'react-router-dom';
import Cards from './Components/Cards';
import CardsDetails from './Components/CardsDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Cards/>}/>
        <Route path='/Cart' element={<CardsDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
