
const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);

    const throwErrOrObj = (err, obj) => {
        err ? res.statusCode = 400 && res.end(JSON.stringify(err))
            : res.end(JSON.stringify(obj));
    };

    res.setHeader = ('Content-Type', 'application/json');

    if(req.method === 'GET' && format == full) {
      .then(body) 
    } else if(req.method === 'Get' && format == simple) {

    }

    if(req.method === 'DELETE' && url.pathname.includes('/penguins/')) {
        const id = url.pathname.slice(1).split('/')[1];
        Penguins.findByIdAndDelete(id, (throwErrOrObj));
    }
};
