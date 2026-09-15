export default async function handler(req, res) {
  try {
    const path = req.query.path;

    if (!path) {
      return res.status(400).json({
        error: 'Missing API path'
      });
    }

    const pathString = Array.isArray(path)
      ? path.join('/')
      : path;

    const fields = req.query.fields;

    const url = new URL(
      `https://restcountries.com/v3.1/${pathString}`
    );

    if (fields) {
      url.searchParams.set(
        'fields',
        Array.isArray(fields) ? fields.join(',') : fields
      );
    }

    console.log('Fetching:', url.toString());

    const response = await fetch(url.toString());

    const data = await response.json();

    if (!response.ok) {
      console.error('REST Countries error:', data);

      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('REST Countries proxy error:', error);

    return res.status(500).json({
      error: 'Failed to fetch data from REST Countries',
      message: error.message
    });
  }
}
