import styles from './listProducts.module.css';
import { BASE_URL_API } from '../../Api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const ListProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const listDataProducts = async () => {
    try {
      const res = await fetch(`${BASE_URL_API}/products`);
      if (!res.ok) throw new Error('Falha ao carregar produtos');
      const response = await res.json();
      setData(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    listDataProducts();
  }, []);

  if (loading) return <div className={styles.loading}>Carregando...</div>;
  if (error) return <div className={styles.error}>Erro: {error}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.list_products}>
        {data.map((item) => (
          <div key={item.id} className={styles.list_item}>
            <img src={item.image} alt={item.title} width={100} />
            <h3>{item.title}</h3>

            <div className={styles.buttons}>
              <Link to={`/productsId/${item.id}`} className={styles.link}>
                <button className={styles.btn_info}>Mais informações</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};