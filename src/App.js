import './App.css';
import TodoJunto from './components/TodoJunto';

function App() {
  return (
    <div className="App">
      <TodoJunto firstName="Jane" lastName="Doe" age={45} hairColor="Black"/>
      <TodoJunto firstName="John" lastName="Smith" age={88} hairColor="Brown"/>
      <TodoJunto firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown"/>
      <TodoJunto firstName="Maria" lastName="Smith" age={62} hairColor="Brown"/>
    </div>
  )
}

export default App;
