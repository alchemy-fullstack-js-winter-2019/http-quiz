const request = require('supertest');

const getPenguins = () => {
    return request 
        .get()
        .then(res => {
            return res.body.results.map(penguin => ({
                name: penguin.name,
                description: penguin.description,
                age: penguin.age
            }));
        });

};
module.exports = getPenguins;
