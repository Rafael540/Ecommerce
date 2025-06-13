import styles from './productsId.module.css';
import { BASE_URL_API } from '../../Api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const ProductsId = () => {
  const [itemId, setItemId] = useState(null); // Iniciar como null
  const [loading, setLoading] = useState(true); // Adicionar estado de loading
  const [error, setError] = useState(null); // Adicionar tratamento de erros
  const { id } = useParams();

  const getItemId = async () => {
    try {
      const res = await fetch(`${BASE_URL_API}/products/${id}`);
      if (!res.ok) throw new Error('Falha ao carregar produto');
      const response = await res.json();
      setItemId(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getItemId();
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;
  if (!itemId) return <div>Produto não encontrado</div>;

return (
  <div className={styles.container}>
    <div className={styles.imgContainer}>
      <img className={styles.img} src={itemId.image} alt={itemId.title} />
    </div>
    
    <div className={styles.productInfo}>
      <h1 className={styles.title}>{itemId.title}</h1>
      
      <div className={styles.rating}>
        <span className={styles.star}>⭐</span>
        <span>{itemId.rating.rate}</span>
      </div>
      
      <div className={styles.priceContainer}>
        <span className={styles.priceLabel}>Preço:</span>
        <span className={styles.price}>R$ {itemId.price}</span>
      </div>
      
      <p className={styles.description}>{itemId.description}</p>
      
      <span className={styles.category}>{itemId.category}</span>
      
      <div className={styles.actions}>
        <button className={`${styles.button} ${styles.primaryButton}`}>
          Adicionar ao Carrinho
        </button>
        <button className={`${styles.button} ${styles.secondaryButton}`}>
          Comprar Agora
        </button>
      </div>
    </div>
  </div>
);
}
export default ProductsId;
