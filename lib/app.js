module.exports = (req, res) => {
    res.send = json => res.end(JSON);
    res.sendWithError = (err, json) => {
        if(err) {
            res.status = 404;
            res.send(err);
        } else {
            res.send(json);
        }
    };
    if(req.method === 'GET' && url.pathname === '/api/penguins'){
        res.end(`${penguins.name}`)};

};
