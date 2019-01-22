const { parse } = require('url');

const penguins = [
    {
        name: 'bernice',
        description: 'What a penguin!',
        age: 7
    },
    {
        name: 'bernard',
        description: 'B Rock Steady!',
        age: 9
    }
];
module.exports = (req, res) => {
    res.end('time to write the app!');
};
res.setHeader('Content-Type', 'application/json');

if(query === 'format=full') {
    res.send(JSON.stringify({
        name: penguins[0].name,
        description: penguins[0].description,
        age: penguins[0].age
    }));
}
} else if(query === 'format=simple') {
  res.send(JSON.stringify({

  }))
}
    
   
