const request = require("supertest");
const app = require("../lib/app");





describe("Penguins API", () => {
  it('returns an array of penguin names', () => {
    return request(app)
      .get('/api/penguins')
      .then(res => {
        expect(res.body).toHaveLength(2);
      })
  })
  it('returns { deleted: true }', () => {
    return request(app)
      .delete('/mistake')
      .then(res => {
        expect(res.body).toEqual({ deleted: true });
      })
  })
});
