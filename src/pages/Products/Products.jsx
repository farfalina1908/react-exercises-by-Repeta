import { useSearchParams } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
import SearchBox from '../../components/SearchBox';
import { getProducts } from '../../fakeAPI';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const products = getProducts();
  const productName = searchParams.get('name') ?? '';
  // console.log(productName);
  const visibleProducts = products.filter(product =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );
  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox value={productName} onChange={updateQueryString} />

      <ProductList products={visibleProducts} />
    </main>
  );
};

export default Products;
