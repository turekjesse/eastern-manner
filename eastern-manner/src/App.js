import './App.css';
import { Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Header></Header>
      <main>
      <Route path="/" exact component={Home} />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
