import { useRef, useState } from 'react';
import './App.css';

/* STATES
function StatesComponent() {
  let [counter, setCounter] = useState(0);
  let [inputText, setInputText] = useState('hej');

  const increment = event => {
    setCounter(previous => previous + 1);
    setCounter(previous => previous + 1);
  }

  return <>
    <h1>{counter}</h1>
    <h1>{inputText}</h1>
    <input onChange={event => setInputText(event.target.value)}></input>
    <button onClick={increment}>Increment</button>
  </>
}

function App() {
  return (
    <div className="App">
      <StatesComponent/>
    </div>
  );
}
*/

/* PROPS (PROPERTIES)
function PropsComponent(props) {
  return <>
    <h1>{props.title}</h1>
  </>
}

function Button(props) {
  return <>
    <button onClick={props.handler}>{props.title}</button>
  </>
}

function App() {
  return (
    <div className="App">
      <PropsComponent title='test'/>
      <PropsComponent title='hej'/>
      <PropsComponent title='JavaScript'/>
      <Button title='Click Me!' handler={() => console.log("You clicked the button!")}/>
    </div>
  );
}*/

/* LISTS, PROPS & STATES
function ListsComponent(props) {
  let [list, setList] = useState(props.list);
  let [input, setInput] = useState('');


  const removeItem = item => {
    setList(list.filter(lang => item !== lang));
  }

  const addItem = () => {
    setList([...list, input]);
  }

  return <>
    <ul>
      {list.map(language => {
        return <div key={language}>
          <li>
            <div onClick={() => removeItem(language)}>{language}</div>
          </li>
        </div>
      })}
    </ul>

    <input onChange={event => setInput(event.target.value)}></input>
    <button onClick={addItem}>Add</button>
  </>
}

function App() {
  return (
    <div className="App">
    <ListsComponent list={['Rust', 'C++', 'JavaScript', 'Java']}/>
    </div>
  );
}
*/

/* CHILDREN
function ChildrenComponent(props) {
  return <>
    {props.children}
  </>
}

function App() {
  return (
    <div className="App">
    <ChildrenComponent>
      <div>hejsan</div>
      <h1>TITEL</h1>
    </ChildrenComponent>
    </div>
  );
}*/

function App() {
  return (
    <div className="App">
      Hej!
    </div>
  );
}

export default App;
