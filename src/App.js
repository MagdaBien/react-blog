import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Post from './components/pages/Post/Post';
import PostAdd from './components/pages/PostAdd/PostAdd';
import PostEdit from './components/pages/PostEdit/PostEdit';
import About from './components/pages/About/About';
import Categories from './components/features/Categories/Categories';
import CategoryPosts from './components/pages/CategoryPosts/CategoryPosts';
import ErrorPage from './components/pages/ErrorPage/ErrorPage';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';


const App = () => {
  return (
    <Container>
      <Header /> 
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<CategoryPosts />} />
          <Route path="/categories" element={<Categories />} />          
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/add/:id" element={<PostAdd />} />
          <Route path="/post/edit/:id" element={<PostEdit />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
      </Routes>  
      <Footer />
    </Container>
  
  );
};
export default App;