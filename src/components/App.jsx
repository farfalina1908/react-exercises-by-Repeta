import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import { Mission } from './Mission';
import { Team } from './Team';
import { Reviews } from './Reviews';
import { Products } from '../pages/Products/Products';
import { ProductDetails } from '../pages/ProductDetails/ProductDetails';
import NotFound from '../pages/NotFound/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
