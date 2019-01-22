/* eslint-disable no-unused-vars */

const { parse } = require('url');
const bodyParser = require('../bodyParser');
const { getPenguin } = require('../../service/penguinApi');

module.exports = (req, res) => {
    const url = parse(req.url, true);

    const throwErrOrObj = (err, obj) => {
        err ? res.statusCode = 400 && res.end(JSON.stringify(err))
            : res.end(JSON.stringify(obj));
    };

    res.setHeader = ('Content-Type', 'application/json');

    if(req.method === 'GET' && format == full) {
        bodyParser(req)
            .then(({ name, age, description }) => {
                getPenguin(name, age, description);
            }); 
    } else if(req.method === 'GET' && format == simple) {
        bodyParser(req)
            .then(({ name, age, description }) => {
                getPenguin(name);
            });
    }

    if(req.method === 'DELETE' && url.pathname.includes('/penguins/')) {
        const id = url.pathname.slice(1).split('/')[1];
        getPenguin.findByIdAndDelete(id, (throwErrOrObj));
    }
};
