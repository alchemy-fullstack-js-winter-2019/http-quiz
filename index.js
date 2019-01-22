const { createServer } = require('http');
const app = require('./lib/app');

const PORT = process.env.PORT || 7890;
const server = createServer(app);

server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log('server running on', server.address().port);
});
