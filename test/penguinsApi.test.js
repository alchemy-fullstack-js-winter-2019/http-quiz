const getPenguins = require('../lib/penguinsApi');

describe('penguins service', () => {
    it('get penguins list', () => {
        return getPenguins() 
            .then(penguins => {
                expect(penguins).toHaveLength(2);
            });
    });
});
