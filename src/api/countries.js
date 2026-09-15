export default async function handler(req, res) {
  try {
    const { endpoint = 'all' } = req.query;

    const fields = req.query.fields;

    const url = new URL(
      `https://restcountries.com/v3.1/${endpoint}`
    );

    if (fields) {
      url.searchParams.set(
        'fields',
        Array.isArray(fields) ? fields.join(',') : fields
      );
    }

    console.log('Fetching REST Countries:', url.toString());

    const response = await fetch(url.toString());

    const data = await response.json();

    if (!response.ok) {
      console.error('REST Countries error:', data);

      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('API proxy error:', error);

    return res.status(500).json({
      error: 'Failed to fetch countries',
      message: error.message
    });
  }
}