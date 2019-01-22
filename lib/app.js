const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    res.setHeader('Content-Type', 'application/json');
    var names = ['bernice', 'bernard'];
    if(req.method === 'GET' && url.pathname === '/api/penguins'){
        res.end(JSON.stringify(names));
    }
    else if(req.method === 'GET' && url.pathname.includes('/api/penguin/king')){
        if(url.query.format.full) {
            res.end(JSON.stringify({
                name: 'bernice',
                description: 'What a penguin!',
                age: 7
            }));
        } else if(url.query.format.simple){
            res.end(JSON.stringify({
                name: 'bernice'
            }));
        }      
    } 
    res.end();
};
