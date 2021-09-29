import logo from './logo.svg';
import './App.css';
import List from './List'
import React, {useState} from 'react'
import data from './data'

function App() {
  const [people, setPeople]=useState(data);
  return (
    <div className="App">
        <section className="container">
          <h4>{people.length} birtydays today</h4>
          <List people={people}/>
          <button className="btn" onClick={() => setPeople([])}>Clear all</button>
        </section>
    </div>
  );
}

export default App;
