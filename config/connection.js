const {connect, connection} = require('mongoose');
connect('mongodb://localhost/mysocialnetworkaPI', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
module.exports = connection;