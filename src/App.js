import { Route, Routes } from 'react-router-dom';
import './App.css';
import { BookPage } from './Components/BookPage';
import { Home } from './Components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/books/topic=:genre' element={<BookPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
