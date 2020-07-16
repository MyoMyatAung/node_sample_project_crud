
//Third-Party Package
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//project module
const db = require('./config/database');

//PORT
const PORT = 3000;

//Application
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());

db.sequelize.sync({force : true})
    .then(()=>{
        console.log('Database connection succeed');
    })
    .catch((error)=>{
        console.log('Fail to connect to database : ',error);
    });

require('./routes/routes.product')(app);

app.listen(PORT,()=>{
    console.log(`Server is running on PORT : ${PORT}`);
});