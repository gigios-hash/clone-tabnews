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

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    padding: '50px',
    minHeight: '100vh',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#45a049',
  };

  const verseStyle = {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#333',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Versículo Bíblico</h1>
      <button
        onClick={fetchVerse}
        style={loading ? { ...buttonStyle, cursor: 'not-allowed', opacity: 0.7 } : buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#45a049')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#4CAF50')}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Mostrar'}
      </button>
      {data && (
        <div style={verseStyle}>
          <p><strong>Versículo:</strong> {data.reference}</p>
          <p><strong>Texto:</strong> {data.text}</p>
        </div>
      )}
    </div>
  );
}
