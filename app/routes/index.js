'use strict';

module.exports = function(app) {
    
    var multer = require('multer');
    var bodyParser = require('body-parser');
    
    app.use(bodyParser.json());
    
    app.get('/', function(req, res){
        res.sendFile(process.cwd() + '/public/index.html');
    });
        
    app.post('/', multer().single('file'), function(req, res) {
            res.json({ 'name': req.file.originalname, 'size': req.file.size });
        });
};