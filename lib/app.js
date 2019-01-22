const { parse } = require('url');
const penguinRoutes = require('./routes/penguins');
const notFound = require('../lib/routes/notFound');




module.exports = (req, res) => {
    const url = parse(req.url, true);
    res.setHeader('Content-Type', 'application/json');
    if(url.pathname.includes('/penguins')) {
        return penguinRoutes(req, res);
    }
    else {
        return notFound(req, res);
    }
  
};
