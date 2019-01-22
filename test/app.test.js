const request = require('supertest');
const app = require('../lib/app');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');


const createPenguin = name => {
    return request(app)
        .post('/api/penguins')
        .send({
            name: name,
            age: 7,
            description: 'what a penguin!'
        })
        .then(res => res.body);
};

describe('Pirates API', () => {
    beforeEach(done => {
        rimraf('./data/penguins', done);
    });

    beforeEach(done => {
        mkdirp('./data/penguins', done);
    });

  
    it('gets bernice and bernard ', () => {
        const penguins = (['bernice', 'bernard']);
        return Promise.all(penguins.map(createPenguin))
            .then(() => {
                return request(app)
                    .get('/api/penguins');
            })
            .then(res => { 
                expect(res.body).toHaveLength(2);
            });
    });
    it('returns object', () => {
        return createPenguin('bernice') 
            .then(createdPenguin => {
                expect(createdPenguin).toEqual(
                    {
                        name: 'bernice',
                        description: 'What a penguin!',
                        age: 7
                    }
                );
            });

    });
    it('deletes', () => {
        return createPenguin('teonna')
            .then(createdPenguin => {
                const id = createdPenguin._id;
                return request(app)
                    .delete(`/api/penguins/${id}`);
            })
            .then(res => {
                expect(res.body).toEqual({ deleted: 1 });
            });
    });
});
