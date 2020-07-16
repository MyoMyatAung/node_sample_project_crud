const Sequelize = require('sequelize');

//Connect to Database
const sequelize = new Sequelize('node_crud_sample_project','root','password',{
    host : 'localhost',
    dialect : 'mysql',
    pool : {
        max : 5,
        min : 0,
        acquire : 30000,
        idle : 10000
    }
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.tbl_product = require('../model/model.product')(sequelize,Sequelize);

module.exports = db;