import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Posts from './components/Posts';
import PostLists from './components/PostLists';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Post from './components/Post';

function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}> Home </Link>
        <Link to="/posts" style={{ padding: 5 }}> Posts </Link>
        <Link to="/about" style={{ padding: 5 }}> About </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostLists />} />
          <Route path=":slug" element={<Post />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
