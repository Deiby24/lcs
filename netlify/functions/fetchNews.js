const axios = require('axios');

exports.handler = async (event) => {
  const { term, language } = event.queryStringParameters;
  const API_KEY = process.env.NEWS_API_KEY; // Asegúrate que coincida con el nombre en Netlify

  if (!API_KEY) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "API key no configurada" })
    };
  }

  try {
    const { data } = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: term,
        language: language,
        apiKey: API_KEY, // Usa la variable aquí
        pageSize: 4,
        sortBy: 'publishedAt'
      }
    });

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(data.articles || [])
    };
  } catch (error) {
    console.error('Error completo:', error.response?.data || error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Error al obtener noticias",
        details: error.response?.data || error.message
      })
    };
  }
};