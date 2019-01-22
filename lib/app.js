
const { parse } = require('url');
const penguinsRoute = require('./api/penguins');
const notFound = require('./notFound');

module.exports = (req, res) => {
  
    res.send = json => res.end(JSON.stringify(json));

    const url = parse(req.url, true);

    res.setHeader('Content-Type', 'application/json');

    if(url.pathname.includes('/penguin')) {
        return penguinsRoute(req, res);
    } else {
        notFound(req, res);
    }
};
