import './App.css';
import Footer from './components/Footer';
import Body from './components/Body';
import Header from './components/Header';
import { createBrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div className="antialiased min-h-screen">
       <Header/>
       <Body/>
       <Footer/>
    </div>
  );
}

export default App;
