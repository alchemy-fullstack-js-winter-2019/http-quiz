const { getPenguins } = require('./penguinsApi');
const { parse } = require('url');

module.exports = (req, res) => {
    // const url = parse(req.url, true);
    if(req.method === 'GET') {
        getPenguins()
            .then(res => {
                res.end('bernice', 'bernard');
            });
    }
};
