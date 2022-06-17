import {useState, useEffect} from 'react';

export const useFetch = (url: string, ref: any, initialValue: any) => {
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ref.current) {
      (async () => {
        try {
          const res = await fetch(url);
          if (res.status >= 400) {
            throw new Error('API server not working!');
          }
          const resJson = await res.json();
          setData(resJson);
        } catch (err: any) {
          setError(err);
        } finally {
          setLoading(false);
        }
      })();
    }
    return () => {
      ref.current = false;
    };
  }, [url, ref]);
  return {loading, data, error};
};
