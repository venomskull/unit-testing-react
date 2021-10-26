import logo from './logo.svg';
import './App.css';
import Users from './components/Users';

function App() {

  const users = [
    { id: 1, name: 'Jayahari', age: 5 },
    { id: 2, name: 'Deepan', age: 37 }
  ]

  return (
    <div className="App">
      {users.map(user => (
        <Users user={user} />
      ))}
    </div>
  );
}

export default App;
