import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ListProducts } from './pages/listProducts';
import ProductsId from "./pages/productsId/ProductsId";
import { FaShoppingCart } from 'react-icons/fa';
import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.header}>
        <div className={styles.logo}>
          <h3>
            Loja <strong style={{ color: 'black' }}>Fácil</strong>
          </h3>
        </div>

        <form className={styles.search} action="">
          <input type="search" placeholder="Encontre o que procura..." />
          <button type="submit">
            <strong>Buscar</strong>
          </button>
        </form>
         <div className={styles.cart}>
               <Link to="/carrinho">
                  <FaShoppingCart size={24} color="black" />    
                </Link>          
          </div>     
      </div>
       <div>
        <nav className={styles.categoryNav}>
            <ul className={styles.categoryList}>
              <li><Link to="/categoria/eletronicos">Eletrônicos</Link></li>
              <li><Link to="/categoria/roupas">Roupas</Link></li>
              <li><Link to="/categoria/casa">Casa e Cozinha</Link></li>
              <li><Link to="/categoria/esportes">Esportes</Link></li>
              <li><Link to="/categoria/livros">Livros</Link></li>
            </ul>
           
        </nav>
        </div> 
        <Routes>
        <Route index element={<ListProducts />} />
        <Route path="/productsId/:id" element={<ProductsId />} />

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;