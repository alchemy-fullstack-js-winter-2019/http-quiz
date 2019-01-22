/* eslint-disable no-unused-vars */
const request = require('supertest');

const getPenguin = id => {
    const penguin = JSON.stringify(id);
    return request
        .then(res => ({
            name: res.body.name,
            age: res.body.age,
            description: res.body.description
        }));
};

module.exports = {
    getPenguin
};
