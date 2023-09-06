import Home from './components/Home';
import {Routes,Route} from 'react-router-dom'
import Rolls from './components/Rolls';
import Top from './components/Top';
import SushiSets from './components/SushiSets';
import Footer from './components/Footer'
import Up from './components/Up'
import Lunch from './components/Lunch';
import BakedSet from './components/BakedSets';
import Extra from './components/Extra'
import Soup from './components/Soup'
import Grill from './components/Grill'
import Noodles from './components/Noodles'
import Salad from './components/Salad'
import Burger from './components/Burger'
import Drink from './components/Drink'
import Dessert from './components/Dessert'






function App() {

  

  return (
    <> 

    <Top/>
           <Routes>
           
             <Route path='/rolls' element={<Rolls/>}/>
             <Route path='/' element={<Home/>}/>
             <Route path='/sushisets' element={<SushiSets/>}/>
             <Route path='/lunch' element={<Lunch/>}/>
             <Route path='/bakedSet' element={<BakedSet/>}/>
             <Route path='/extra' element={<Extra/>}/>
             <Route path='/soups' element={<Soup/>}/>
             <Route path='/grill' element={<Grill/>}/>
             <Route path='/noodles' element={<Noodles/>}/>
             <Route path='/salad' element={<Salad/>}/>
             <Route path='/burger&Appetizer' element={<Burger/>}/>
             <Route path='/drink' element={<Drink/>}/>
             <Route path='/dessert' element={<Dessert/>}/>

          </Routes>

          <Footer/>
          <Up/>
    </>
  );
}

export default App;
