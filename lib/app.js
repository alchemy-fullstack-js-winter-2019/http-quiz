const { parse } = require('url');
const penguinsRoutes = require('./routes/penguins');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    res.setHeader('Content-Type', 'application/json');
    if(url.pathname.includes('/api/penguins')) {
        return penguinsRoutes(req, res);
    }
};
