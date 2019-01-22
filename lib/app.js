const Router = require('express');

module.exports = Router()
    
    .get('/penguins', (req, res) => {
        const body =  ['bernice', 'bernard'];
        return body;  
    })

    .get('/penguin/king?format=<simple|full>', (req, res) => {
        if(format === 'full') {
            return {
                name: 'bernice',
                description: 'What a penguin!',
                age: 7
            };
        }

        if(format === 'simple' || format === undefined) {
            return {
                name: 'bernice'
            };
        }
    })
    
    .delete('/mistake', () => {
        return { deleted: true };
    });