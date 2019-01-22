const Penguins = require('../../lib/models/Penguins');
const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);

    const throwErrOrObj = (err, obj) => {
        err ? res.statusCode = 400 && res.end(JSON.stringify(err))
            : res.end(JSON.stringify(obj));
    };

    res.setHeader = ('Content-Type', 'application/json');
};
