
module.exports = (req, res) => {

    if(req.method === 'GET' && req.pathname.includes('/api/penguins')) {
        res.end(['bernice', 'bernard']);
    }
  

};
