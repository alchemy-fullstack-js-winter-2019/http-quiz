module.exports = (req, res) => {
    const url = parse(req.url, true);

    const penguin = [{
        name: 'bernice',
        description: 'What a penguin!',
        age: 7

    }];
    // if(req.method === 'POST' && url.pathname === '/penguins') {
    //   bodyParser(req)
    //   Penguins.create({
    //     name: 
    //   })
    // }

    if(req.method === 'GET' && url.pathname === ('/penguins')) {
        // const penguins = ['bernice', ''];
        res.send(['bernice', 'bernard']);

    } else if(req.method === 'GET' && url.pathname.includes('/penguins/king?format=full')) {
        res.end(JSON.stringify(penguin));

    } else if(req.method === 'GET' && url.pahtname.includes('/penguins/king?format=siimple')) {
        res.send(JSON.stringify({ name: 'bernice' }));

    } else if(req.method === 'DELETE' && url.pathname.includes('/penguins/mistake')) {
        const mistake = url.pathname.slice(1).split('/')[2];
        res.end(JSON.stringify(mistake));

    }
    // res.end('time to write the app!');
};
