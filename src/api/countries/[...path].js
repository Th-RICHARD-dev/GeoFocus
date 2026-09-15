export default async function handler(req, res) { 
    try { 
        const path = req.query.path; 
        
        if (!path) { 
            return res.status(400).json({ 
                error: 'Missing API path' 
            }); 
        }

        const pathString = Array.isArray(path) ? path.join('/') : path;
        
        const query = new URLSearchParams();
        
        if (req.query.fields) {
            query.set('fields', req.query.fields);
        } 
        
        const url = `https://restcountries.com/v3.1/${pathString}` + (query.toString() ? `?${query.toString()}` : '');
        const response = await fetch(url);
        const data = await response.json();
        
        return res.status(response.status).json(data); 
    } catch (error) {
        console.error('REST Countries API error:', error);
        
        return res.status(500).json({
            error: 'Failed to fetch data from REST Countries'
        });
    }
}