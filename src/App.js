import './App.css';
import Doctors from './components/Doctors';
import Specialities from './components/Specialities';

function App() {
  return (
    <div className="App p-12 antialiased">
        <Specialities/>
        <Doctors/>
    </div>
  );
}

export default App;
