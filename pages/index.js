import { useState } from 'react';

export default function HomePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchVerse = async () => {
    setLoading(true); // Show loading state
    try {
      const response = await fetch('/api/getData');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <div>
      <h1>Versículo que você precisa ler hoje!</h1>
      <button onClick={fetchVerse} disabled={loading}>
        {loading ? 'Loading...' : 'Show Verse'}
      </button>
      {data && (
        <div>
          <p><strong>Versículo:</strong> {data.reference}</p>
          <p><strong>Texto:</strong> {data.text}</p>
        </div>
      )}
    </div>
  );
}
