const penguins = require('./penguinsApi');

module.exports = (req, res) => {
    req.get(penguins.name);
    res.send = json => res.end(JSON.stringify(json));
};
