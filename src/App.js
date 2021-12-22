import Navbar from './component/Navbar';
import Home from './routes/Home';
import About from './routes/About';
import Calculator from './routes/Calculator';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayMovies from './routes/DisplayMovies';
import DetailMovie from './routes/DetailMovie';
import Board from './routes/Board';
import Todo from './routes/Todo';
import ShowContent from './component/ShowContent';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/calculator" element={<Calculator />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/movies" element={<DisplayMovies />}></Route>
          <Route path="/movies:id" element={<DetailMovie />}></Route>
          <Route path="/board" element={<Board />}></Route>
          <Route path="/showcontent" element={<ShowContent />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
