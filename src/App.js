import logo from './logo.svg';
import './App.css';
import Notes from './components/Notes';
import { useState } from 'react';
import Child1 from './components/Child1';
import NewsApp from './components/NewsApp';
import Convertor from './components/Convertor';
function App() {
  const[countInParent , setCountInParent] = useState(0);
  function update(){
    setCountInParent(countInParent+1);
  }
 return(
  <div className="app-list">
    {/* <Notes/> */}
    {/* <p>count in parent: {countInParent}</p>
    <Child1 onupdate = {countInParent}/>
    <button onClick={update}>increment</button> */}
    <NewsApp />
    {/* <Convertor /> */}
    
  </div>
 )
 }

export default App;
