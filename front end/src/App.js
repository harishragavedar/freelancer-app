
import './App.css';
import Header from './components/home/header/Header';
import { Routes,Route } from 'react-router-dom';
import HomePages from './components/pageContent/HomePages';
import Login from './components/home/header/Login';
// import {Signups} from './components/home/header/Registera';
//import Login from './components/home/header/Login';
import Signup  from './components/home/header/Registera';
import About from './components/home/about/About';
import Service from './components/home/about/Service';
import Pricing from './components/home/header/Pricing';
import Streams from './components/home/homes/Streams';
import store from './components/home/header/store';
import { Provider } from 'react-redux';
import FeedForm from './components/home/header/Feedback';

function App() {
  return (
      <Provider store={store}>
         <div>
      <Header/>
      <Routes>
      <Route path='/' element={<HomePages/>}/>
      <Route path='/user' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/advisor' element={<Login/>}/>
      <Route path='/registers' element={<Signup/>}/>
      <Route path='/streams' element={<About/>}/>
      <Route path='/services' element={<Service/>}/>
      <Route path='/membership' element={<Pricing/>}/>
      <Route path='/feedback' element={<FeedForm/>}/>
    </Routes>
    </div>
    </Provider>
  );
}

export default App;
