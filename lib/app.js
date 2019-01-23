const http = require('http');
module.exports = (req, res) => {
    http
        .createServer()
        .listen(7890, () => {
            console.log('server listening on 7890');
        });
    res.end('time to write the app!');
};
