const request = require('supertest');
const app = require('../lib/app');

describe('Pirates API', () => {
    it('checks /api/pinguins request', () => {
        return request(app)
            .get('/api/pinguins')
            .send([
                'bernice', 
                'bernard'
            ])
            .then(res => {
              console.log('this this', res.body);
                expect(res.header).toContain('bernice');
            });
    });
});
