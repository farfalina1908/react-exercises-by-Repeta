import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Products from '../pages/Products/Products';
import NotFound from '../pages/NotFound/NotFound';
import { Container, Header, Logo, Link } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          GoMerch Store
        </Logo>
        <nav>
          <Link to="/"> Home</Link>
          <Link to="/about"> About</Link>
          <Link to="/products"> Products</Link>
        </nav>
      </Header>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </Container>
  );
};
