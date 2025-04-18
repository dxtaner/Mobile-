import {useEffect, useState} from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) throw new Error('Veri alınamadı');
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err.message || 'Bilinmeyen hata');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!url) return;
    fetchData();
  }, [url]);

  return {data, loading, error};
};

export default useFetch;
