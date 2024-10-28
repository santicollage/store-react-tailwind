import { useState, useEffect } from 'react';
import {Layout} from '../../Components/Layout';
import {Card} from '../../Components/Card';

function Home() {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      setItems(result);  
    } catch (error) {
      setError(error.message);  
    } finally {
      setLoading(false);  
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Layout>
      Home
      <div className='grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg'>
      {
        items.map((item) => (
          <Card key={item.id} item={item}/>
        ))
      }
      </div>
    </Layout>
  )
}

export { Home };