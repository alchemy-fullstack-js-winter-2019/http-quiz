const Penguins = require('../models/Penguins');
const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    if(req.method === 'GET' && url.pathname.includes('/api/penguin/king?format=<simple|full>')) {
        const id = url.pathname.slice(1).split('/')[1];
        Penguins.findById(id, (err, foundPenguins) => {
            res.end(JSON.stringify(foundPenguins));
        });
    }

    else if(req.method === 'GET' && url.pathname === '/api/penguins') {
        Penguins.find((err, listOfPenguins) => {
            res.end(JSON.stringify(listOfPenguins));
        });
    }

    else if(req.method === 'DELETE' && url.pathname.includes('/mistake')) {
        const id = url.pathname.slice(1).split('/')[1];
        Penguins.findByIdAndDelete(id, (err, deletedPenguins) => {
            res.end(JSON.stringify(deletedPenguins));
        });
    }

};
