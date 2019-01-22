const { parse } = require('url');

const penguins = [
    {
        name: 'bernice',
        description: 'What a penguin!',
        age: 7
    },
    {
        name: 'bernard',
        description: '',
        age: ''
    }
];
module.exports = (req, res) => {
    res.end('time to write the app!');
};
res.setHeader('Content-Type', 'application/json');

if(query === 'format=full') {
    res.end(JSON.stringify({
        name: penguins[0].name,
        description: penguins[0].description,
        age: penguins[0].age
    }));
} else if(query === 'format=simple') {
  res.end(JSON.stringify({
    name: penguins[0].name
    }));
} else(//send a 404 status code)   
)