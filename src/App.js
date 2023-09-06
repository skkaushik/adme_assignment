
import './App.css';
import HeaderImg from './components/HeaderImg';
import ImageList from './components/ImageList';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <HeaderImg/>
     <ImageList/>
     <Pagination/>
     
    </div>
  );
}

export default App;
