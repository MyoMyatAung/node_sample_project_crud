const db = require('../config/database');

const sequelize = db.sequelize;
const Sequelize = db.Sequelize;
const Product = db.tbl_product;

exports.getAllProduct = (req,res,next)=>{
    const sql = `SELECT * FROM tbl_products;`;
    sequelize.query(sql,{type : sequelize.QueryTypes.SELECT})
        .then((data)=>{
            res.json(data)
        })
        .catch((error)=>{
            res.send(error);
        });
}

exports.getSelectProduct = (req,res,next) => {
    const sql = `SELECT * FROM tbl_products WHERE product_id = ?`;
    sequelize.query(sql,{
        replacements : [req.params.id],
        type : sequelize.QueryTypes.SELECT
    })
    .then((data)=>{
        res.json(data)
    })
    .catch((error)=>{
        res.send(error);
    });
}

exports.addProduct = (req,res,next)=>{
    const data = req.body;
    Product.create({
        product_title : data.product_title,
        product_description : data.product_description,
        product_imageURL : data.product_imageURL,
        product_price : data.product_price
    }).then((response)=>{
        res.send('Success');
    }).catch((error)=>{
        res.send(error);
    });
}

exports.updateProduct = (req,res,next) => {
    const data = req.body;
    Product.update({
        product_title : data.product_title,
        product_description : data.product_description,
        product_imageURL : data.product_imageURL,
        product_price : data.product_price
    },{
        where : {
            product_id : req.params.id
        }
    })
    .then((response)=>{
        res.send('Success')
    })
    .catch((error)=>{
        res.send(error);
    });
}

exports.deleteProduct = (req,res,next)=>{
    Product.destroy({
        where : {
            product_id : req.params.id
        }
    })
    .then((response)=>{
        res.send('Success');
    })
    .catch((error)=>{
        res.send(error);
    })
}