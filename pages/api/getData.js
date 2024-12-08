// pages/api/getData.js
export default async function handler(req, res) {
    if (req.method === 'GET') {
      try {
        // Fetch data from the Bible API
        const response = await fetch('https://bible-api.com/john 3:16?translation=almeida');
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
  
        // Parse the JSON data
        const data = await response.json();
  
        // Send the data as the response
        res.status(200).json(data);
      } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch data from the Bible API' });
      }
    } else {
      // Handle other HTTP methods
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  